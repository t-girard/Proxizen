import ProxizenLayout from '@/layouts/ProxizenLayout';
import { Head } from '@inertiajs/react';



export default function Home() {
    const events = [
        {
            time: '09:00 - 09:30',
            title: 'Infirmière - Mme Dupont',
            subtitle: 'Injection insuline',
            type: 'urgent',
            badge: 'URGENT',
        },
        {
            time: '14:00 - 16:00',
            title: 'Aide à domicile - M. Martin',
            subtitle: 'Ménage et courses',
            type: 'aide',
            badge: '14h',
        },
        {
            time: '16:30',
            title: 'Rappel médicament',
            subtitle: 'Doliprane 1g',
            type: 'rappel',
            badge: '16h',
        },
        {
            time: '17:15 - 17:45',
            title: 'Rendez-vous - Dr. Rousseau',
            subtitle: 'Consultation cardiologie',
            location: 'Cabinet médical, 12 rue Victor Hugo',
            type: 'rdv',
            badge: '17h',
        },
        {
            time: '18:00 - 18:45',
            title: 'Kinésithérapeute',
            subtitle: 'Rééducation jambe droite',
            type: 'kine',
            badge: '18h',
        },
    ];

    const patientInfo = {
        name: 'Jean Dupont',
        age: '84 ans',
    };

    const quickActions = [
        { title: 'Calendrier', icon: '📅', color: 'bg-blue-500', href: '/calendrier' },
        { title: 'Contacts', icon: '📞', color: 'bg-purple-500', href: '/contacts' },
        { title: 'Documents', icon: '📄', color: 'bg-orange-500', href: '/documents' },
        { title: 'Médicaments', icon: '💊', color: 'bg-red-500', href: '#' },
        { title: 'Paramètres', icon: '⚙️', color: 'bg-gray-500', href: '/settings' },
    ];

    const getEventClasses = (type: string) => {
        const baseClasses = 'relative p-6 rounded-2xl border-l-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]';
        
        const typeStyles: Record<string, string> = {
            urgent: 'bg-red-50 border-red-500 dark:bg-red-900/20',
            aide: 'bg-green-50 border-green-500 dark:bg-green-900/20',
            rappel: 'bg-orange-50 border-orange-500 dark:bg-orange-900/20',
            rdv: 'bg-blue-50 border-blue-500 dark:bg-blue-900/20',
            kine: 'bg-purple-50 border-purple-500 dark:bg-purple-900/20',
        };

        return `${baseClasses} ${typeStyles[type] || ''}`;
    };

    const getBadgeClasses = (type: string) => {
        const badgeStyles: Record<string, string> = {
            urgent: 'bg-red-500 text-white',
            aide: 'bg-green-500 text-white',
            rappel: 'bg-orange-500 text-white',
            rdv: 'bg-blue-500 text-white',
            kine: 'bg-purple-500 text-white',
        };

        return `absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${badgeStyles[type] || ''}`;
    };

    return (
        <ProxizenLayout title="Accueil">
            <Head title="Accueil" />
            
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                        Bonjour Marie 👋
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Voici votre planning pour aujourd'hui
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                    Aujourd'hui
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Lundi 6 janvier 2026
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition">
                                    Voir la semaine
                                </button>
                                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition">
                                    + Ajouter
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {events.map((event, index) => (
                                <div key={index} className={getEventClasses(event.type)}>
                                    <span className={getBadgeClasses(event.type)}>
                                        {event.badge}
                                    </span>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                                {event.time}
                                            </div>
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {event.subtitle}
                                            </p>
                                            {event.location && (
                                                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {event.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                    JD
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {patientInfo.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {patientInfo.age}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                                Accès rapides
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {quickActions.map((action, index) => (
                                    <a
                                        key={index}
                                        href={action.href}
                                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition group"
                                    >
                                        <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition`}>
                                            {action.icon}
                                        </div>
                                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                                            {action.title}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProxizenLayout>
    );
}
