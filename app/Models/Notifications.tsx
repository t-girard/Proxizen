import { useState } from 'react';
import { Head } from '@inertiajs/react';
import ProxizenLayout from '@/layouts/ProxizenLayout';
import { useNotifications, Notification } from '@/hooks/useNotifications';
import NotificationModal from '@/components/NotificationModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notifications() {
    const {
        notifications,
        unreadCount,
        settings,
        isLoading,
        createNotification,
        updateNotification,
        deleteNotification,
        markAsRead,
        requestPushPermission,
        updateSettings,
        getIcon,
        getTypeLabel,
    } = useNotifications();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingNotification, setEditingNotification] = useState<Notification | null>(null);
    const [activeTab, setActiveTab] = useState<'upcoming' | 'all' | 'settings'>('upcoming');
    const [filter, setFilter] = useState<'all' | 'unread'>('all');

    const handleCreateNew = () => {
        setEditingNotification(null);
        setIsModalOpen(true);
    };

    const handleEdit = (notification: Notification) => {
        setEditingNotification(notification);
        setIsModalOpen(true);
    };

    const handleSave = async (notificationData: any) => {
        if (editingNotification) {
            await updateNotification(editingNotification.id, notificationData);
        } else {
            await createNotification(notificationData);
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette notification ?')) {
            await deleteNotification(id);
        }
    };

    const handleEnablePush = async () => {
        const granted = await requestPushPermission();
        if (granted) {
            await updateSettings({ push_enabled: true });
            toast.success('Notifications push activées');
        } else {
            toast.error('Permission refusée');
        }
    };

    const filteredNotifications = notifications
        .filter(n => !n.is_deleted)
        .filter(n => {
            if (activeTab === 'upcoming') return !n.is_triggered;
            return true;
        })
        .filter(n => {
            if (filter === 'unread') return !n.is_read;
            return true;
        })
        .sort((a, b) => new Date(a.trigger_at).getTime() - new Date(b.trigger_at).getTime());

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return 'border-red-500 bg-red-50 dark:bg-red-900/20';
            case 'normal': return 'border-blue-500 bg-blue-50 dark:bg-blue-900/20';
            case 'low': return 'border-green-500 bg-green-50 dark:bg-green-900/20';
            default: return 'border-gray-500 bg-gray-50 dark:bg-gray-900/20';
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = date.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if (diff < 0) return 'Passée';
        if (days === 0 && hours === 0) return 'Dans moins d\'une heure';
        if (days === 0) return `Dans ${hours}h`;
        if (days === 1) return 'Demain';
        return `Dans ${days} jours`;
    };

    return (
        <ProxizenLayout title="Notifications">
            <Head title="Notifications" />
            
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="p-6 space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Notifications 🔔
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {unreadCount} notification{unreadCount > 1 ? 's' : ''} non lue{unreadCount > 1 ? 's' : ''}
                        </p>
                    </div>
                    <button
                        onClick={handleCreateNew}
                        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Nouvelle notification
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => setActiveTab('upcoming')}
                        className={`px-4 py-2 font-medium transition ${
                            activeTab === 'upcoming'
                                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        À venir ({notifications.filter(n => !n.is_triggered && !n.is_deleted).length})
                    </button>
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 font-medium transition ${
                            activeTab === 'all'
                                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        Toutes ({notifications.filter(n => !n.is_deleted).length})
                    </button>
                    <button
                        onClick={() => setActiveTab('settings')}
                        className={`px-4 py-2 font-medium transition ${
                            activeTab === 'settings'
                                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        Paramètres
                    </button>
                </div>

                {/* Content */}
                {activeTab === 'settings' ? (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Paramètres des notifications</h2>
                        
                        {/* Push notifications */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">Notifications push</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Recevoir des notifications même quand l'onglet est fermé</p>
                            </div>
                            {settings?.push_enabled ? (
                                <button
                                    onClick={() => updateSettings({ push_enabled: false })}
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                >
                                    Activé
                                </button>
                            ) : (
                                <button
                                    onClick={handleEnablePush}
                                    className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition"
                                >
                                    Désactivé
                                </button>
                            )}
                        </div>

                        {/* Sound */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">Son des notifications</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Jouer un son lors de l'arrivée d'une notification</p>
                            </div>
                            <button
                                onClick={() => updateSettings({ sound_enabled: !settings?.sound_enabled })}
                                className={`px-4 py-2 rounded-lg transition ${
                                    settings?.sound_enabled
                                        ? 'bg-green-500 text-white hover:bg-green-600'
                                        : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-500'
                                }`}
                            >
                                {settings?.sound_enabled ? 'Activé' : 'Désactivé'}
                            </button>
                        </div>

                        {/* Types de notifications */}
                        <div className="space-y-3">
                            <h3 className="font-medium text-gray-900 dark:text-white">Types de notifications actifs</h3>
                            {[
                                { key: 'medical', label: '🏥 Rendez-vous médicaux' },
                                { key: 'medication', label: '💊 Rappels médicaments' },
                                { key: 'call', label: '📞 Appels à passer' },
                                { key: 'document', label: '📄 Documents à vérifier' },
                                { key: 'urgent', label: '⚠️ Alertes urgentes' },
                                { key: 'info', label: 'ℹ️ Informations' },
                                { key: 'other', label: '🔔 Autres' },
                            ].map((type) => (
                                <div key={type.key} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span className="text-sm text-gray-900 dark:text-white">{type.label}</span>
                                    <button
                                        onClick={() => updateSettings({ [`${type.key}_enabled`]: !settings?.[`${type.key}_enabled` as keyof typeof settings] })}
                                        className={`w-12 h-6 rounded-full transition relative ${
                                            settings?.[`${type.key}_enabled` as keyof typeof settings]
                                                ? 'bg-green-500'
                                                : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                    >
                                        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                                            settings?.[`${type.key}_enabled` as keyof typeof settings] ? 'translate-x-6' : ''
                                        }`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Filter */}
                        {activeTab === 'all' && (
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setFilter('all')}
                                    className={`px-4 py-2 rounded-lg transition ${
                                        filter === 'all'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                    }`}
                                >
                                    Toutes
                                </button>
                                <button
                                    onClick={() => setFilter('unread')}
                                    className={`px-4 py-2 rounded-lg transition ${
                                        filter === 'unread'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                    }`}
                                >
                                    Non lues
                                </button>
                            </div>
                        )}

                        {/* List */}
                        <div className="space-y-4">
                            {filteredNotifications.length === 0 ? (
                                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                                    <p className="text-gray-600 dark:text-gray-400">Aucune notification</p>
                                </div>
                            ) : (
                                filteredNotifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className={`
                                            relative p-6 rounded-2xl border-l-4 transition-all
                                            ${getPriorityColor(notification.priority)}
                                            ${!notification.is_read ? 'ring-2 ring-blue-500' : ''}
                                            hover:shadow-lg
                                        `}
                                    >
                                        {/* Badge non lu */}
                                        {!notification.is_read && (
                                            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full"></div>
                                        )}

                                        <div className="flex items-start gap-4">
                                            {/* Icon */}
                                            <div className="flex-shrink-0 text-4xl">
                                                {getIcon(notification.type)}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                            {notification.title}
                                                        </h3>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                            {getTypeLabel(notification.type)} • {formatDate(notification.trigger_at)}
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                {notification.description && (
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                                        {notification.description}
                                                    </p>
                                                )}

                                                <div className="flex items-center gap-2 mt-4 text-sm">
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        📅 {new Date(notification.trigger_at).toLocaleString('fr-FR')}
                                                    </span>
                                                    {notification.end_at && (
                                                        <span className="text-gray-600 dark:text-gray-400">
                                                            → {new Date(notification.end_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Actions */}
                                                <div className="flex gap-2 mt-4">
                                                    {!notification.is_read && (
                                                        <button
                                                            onClick={() => markAsRead(notification.id)}
                                                            className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition"
                                                        >
                                                            Marquer comme lu
                                                        </button>
                                                    )}
                                                    {!notification.is_triggered && (
                                                        <button
                                                            onClick={() => handleEdit(notification)}
                                                            className="px-3 py-1.5 bg-gray-500 text-white text-xs rounded-lg hover:bg-gray-600 transition"
                                                        >
                                                            Modifier
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => handleDelete(notification.id)}
                                                        className="px-3 py-1.5 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition"
                                                    >
                                                        Supprimer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* Modal */}
            <NotificationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                notification={editingNotification}
            />
        </ProxizenLayout>
    );
}
