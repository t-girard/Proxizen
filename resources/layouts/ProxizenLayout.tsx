import { Head, Link } from '@inertiajs/react';
import { type ReactNode, useState, useEffect, useRef } from 'react';
import { toggleDarkMode } from '@/utils/darkMode';
import { usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface ProxizenLayoutProps {
    children: ReactNode;
    title?: string;
}

export default function ProxizenLayout({ children, title}: ProxizenLayoutProps) {
    const { auth } = usePage<SharedData>().props;
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const { selectedDependent } = usePage().props as any;

    useEffect(() => {
        const checkDarkMode = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkDarkMode();

        const handleAppearanceChange = () => {
            checkDarkMode();
        };

        window.addEventListener('appearance-changed', handleAppearanceChange);

        return () => {
            window.removeEventListener('appearance-changed', handleAppearanceChange);
        };
    }, []);

    const handleToggleDarkMode = () => {
        toggleDarkMode();
        setIsDark(document.documentElement.classList.contains('dark'));
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <Head title={title} />

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img
                                    src="../images/logo_proxizen.png"
                                    alt="Proxizen"
                                    className="w-12 h-12 rounded-xl shadow-lg"
                                    onError={(e) => {
                                        const target = e.currentTarget as HTMLImageElement;
                                        target.style.display = 'none';
                                        const next = target.nextElementSibling as HTMLElement | null;
                                        if (next) next.style.display = 'flex';
                                    }}
                                />
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Proxizen</h1>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Assistance aux aidants</p>
                                </div>
                            </div>

                            <nav className="hidden md:flex items-center gap-2">
                                <Link
                                    href="/home"
                                    className="px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Accueil
                                </Link>
                                <Link
                                    href="/events"
                                    className="px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Calendrier
                                </Link>
                                <Link
                                    href="/contacts"
                                    className="px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Contacts
                                </Link>
                                <Link
                                    href="/documents"
                                    className="px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Documents
                                </Link>
                                <Link
                                    href="/notifications"
                                    className="px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    Notifications
                                </Link>
                            </nav>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handleToggleDarkMode}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                                    aria-label="Toggle dark mode"
                                >
                                    {isDark ? (
                                        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </button>

                                <div className="relative">
                                    <button
                                        onClick={() => setNotificationOpen(!notificationOpen)}
                                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition relative"
                                    >
                                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                                    </button>

                                    {notificationOpen && (
                                        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                                            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                                                <h3 className="font-semibold text-gray-800 dark:text-white">Notifications</h3>
                                            </div>
                                            <div className="p-2">
                                                <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">Aucune nouvelle notification</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700 relative" ref={userMenuRef}>
                                    <div className="text-right hidden sm:block">
                                        <p className="text-sm font-semibold text-gray-800 dark:text-white text-center">{auth.user.name}</p>     
                                        <span
                                            className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                                                selectedDependent.role === 'primary'
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-gray-100 text-gray-600'
                                            }`}
                                        >
                                            {selectedDependent.role === 'primary'
                                                ? 'Aidant principal'
                                                : 'Aidant secondaire'}
                                        </span>                           
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={() => setUserMenuOpen(!userMenuOpen)}
                                            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:ring-4 hover:ring-blue-100 transition"
                                        >
                                            <span className="text-white font-semibold">{auth.user.name.charAt(0).toUpperCase()}</span>
                                        </button>

                                        {userMenuOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                                                <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                                                    <p className="font-semibold text-gray-800 dark:text-white">{auth.user.name}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{auth.user.email}</p>
                                                </div>
                                                <div className="p-2">
                                                    <Link
                                                        href="/profils"
                                                        className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v2m0 0l3-3m-3 3l3 3M16 7h3a2 2 0 012 2v2m0 0l-3-3m3 3l-3 3" />
                                                        </svg>
                                                        Changer de Profil
                                                    </Link>
                                                    <Link
                                                        href="/settings/profile"
                                                        className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Paramètres
                                                    </Link>
                                                </div>
                                                <div className="p-2 border-t border-gray-200 dark:border-gray-700">
                                                    <Link
                                                        href="/logout"
                                                        method="post"
                                                        as="button"
                                                        className="w-full text-left px-3 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                        </svg>
                                                        Déconnexion
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-6 py-8">
                    {children}
                </main>
            </div>
        </>
    );
}
