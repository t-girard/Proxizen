import ProxizenLayout from '@/layouts/ProxizenLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { SharedData, CalendarEvent, Event} from '../types';
import Calendar from '@/components/Calendar';

type ColorGradient = 'blue' | 'purple' | 'green' | 'red' | 'orange';

export default function Home() {
    const { auth, dependent, events } = usePage<SharedData>().props;

    const initialEvents: Event[] = events || [];

    console.log("Événements récupérés :", initialEvents);

    const getInitials = (name: string): string => {
        return name
            .split(' ')
            .filter(Boolean)
            .map(word => word[0].toUpperCase())
            .join('')
            .slice(0, 2);
    };

    const colorGradients: Record<ColorGradient, string> = {
        blue: 'from-blue-400 to-blue-600',
        purple: 'from-purple-400 to-purple-600',
        green: 'from-green-400 to-green-600',
        red: 'from-red-400 to-red-600',
        orange: 'from-orange-400 to-orange-600',
    };

    const quickActions = [
        { title: 'Calendrier', icon: '📅', color: 'bg-blue-500', href: '/events' },
        { title: 'Contacts', icon: '📞', color: 'bg-purple-500', href: '/contacts' },
        { title: 'Documents', icon: '📄', color: 'bg-orange-500', href: '/documents' },
        { title: 'Paramètres', icon: '⚙️', color: 'bg-gray-500', href: '/settings' },
    ];

    const mapEventToCalendar = (event: Event) => ({
        id: event.id,
        titre: event.titre,
        type: event.type,
        date: event.date,
        heureD: event.heureD,
        heureF: event.heureF,
        description: event.description,
    });

    const eventsList: CalendarEvent[] = initialEvents.map(mapEventToCalendar);

    return (
        <ProxizenLayout title="Accueil">
            <Head title="Accueil" />
            
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                        Bonjour {auth.user.name} 👋
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
                                    {new Date().toLocaleDateString('fr-FR', 
                                        { weekday: 'long', 
                                        day: 'numeric', 
                                        month: 'long', 
                                        year: 'numeric', })
                                    } 
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    href="/events"
                                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition"
                                >
                                    Voir la semaine
                                </Link>
                            </div>
                        </div>

                        <Calendar events={eventsList} />
                    </div>

                    <div className="space-y-6">
                        {dependent ? (
                            <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all duration-300">
                                <div className={`absolute inset-x-0 top-0 h-24`} />

                                <div className="relative p-6 flex items-center gap-4">
                                    <div className="relative">
                                        <div
                                            className={`
                                                w-20 h-20 rounded-full
                                                bg-gradient-to-br ${colorGradients[dependent?.color as ColorGradient] || colorGradients.blue}
                                                flex items-center justify-center
                                                ring-4 ring-white dark:ring-gray-800
                                                shadow-lg
                                                transition-transform duration-300
                                                hover:scale-105
                                            `}
                                        >
                                            <span className="text-2xl font-bold text-white tracking-wide">
                                                {getInitials(dependent.name)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-1 pt-6">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white leading-tight">
                                            {dependent.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            {dependent.age} ans
                                        </p>

                                        <span
                                            className={`
                                                inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full
                                                bg-gray-100 dark:bg-gray-700
                                                text-gray-700 dark:text-gray-300
                                            `}
                                        >
                                            Profil suivi
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                <p className="text-gray-600 dark:text-gray-400 text-center">
                                    Aucun profil sélectionné
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-500 text-center mt-2">
                                    Veuillez sélectionner un profil dans les paramètres
                                </p>
                            </div>
                        )}

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
