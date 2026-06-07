import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

export type NotificationType = 'medical' | 'medication' | 'call' | 'document' | 'urgent' | 'info' | 'other';
export type NotificationPriority = 'low' | 'normal' | 'high';

export interface Notification {
    id: number;
    user_id: number;
    title: string;
    description: string | null;
    type: NotificationType;
    priority: NotificationPriority;
    trigger_at: string;
    end_at: string | null;
    is_read: boolean;
    is_triggered: boolean;
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
}

export interface NotificationSettings {
    push_enabled: boolean;
    sound_enabled: boolean;
    medical_enabled: boolean;
    medication_enabled: boolean;
    call_enabled: boolean;
    document_enabled: boolean;
    urgent_enabled: boolean;
    info_enabled: boolean;
    other_enabled: boolean;
}

const API_BASE = '/notifications/api';

export function useNotifications() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [settings, setSettings] = useState<NotificationSettings | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Icônes par type
    const getIcon = (type: NotificationType) => {
        switch (type) {
            case 'medical': return '🏥';
            case 'medication': return '💊';
            case 'call': return '📞';
            case 'document': return '📄';
            case 'urgent': return '⚠️';
            case 'info': return 'ℹ️';
            case 'other': return '🔔';
            default: return '🔔';
        }
    };

    // Labels par type
    const getTypeLabel = (type: NotificationType) => {
        switch (type) {
            case 'medical': return 'Rendez-vous médical';
            case 'medication': return 'Rappel médicament';
            case 'call': return 'Appel à passer';
            case 'document': return 'Document à vérifier';
            case 'urgent': return 'Alerte urgente';
            case 'info': return 'Information';
            case 'other': return 'Autre';
            default: return 'Notification';
        }
    };

    // Récupérer toutes les notifications
    const fetchNotifications = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE}`);
            const data = await response.json();
            setNotifications(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des notifications:', error);
        }
    }, []);

    // Récupérer le nombre de notifications non lues
    const fetchUnreadCount = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE}/unread`);
            const data = await response.json();
            setUnreadCount(data.count);
        } catch (error) {
            console.error('Erreur lors de la récupération du compteur:', error);
        }
    }, []);

    // Récupérer les settings
    const fetchSettings = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE}/settings`);
            const data = await response.json();
            setSettings(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des settings:', error);
        }
    }, []);

    // Créer une notification
    const createNotification = async (notification: Omit<Notification, 'id' | 'user_id' | 'is_read' | 'is_triggered' | 'is_deleted' | 'created_at' | 'updated_at'>) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE}`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: JSON.stringify(notification),
            });
            const data = await response.json();
            await fetchNotifications();
            toast.success('Notification créée avec succès');
            return data;
        } catch (error) {
            console.error('Erreur lors de la création:', error);
            toast.error('Erreur lors de la création de la notification');
        } finally {
            setIsLoading(false);
        }
    };

    // Modifier une notification
    const updateNotification = async (id: number, updates: Partial<Notification>) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE}/${id}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: JSON.stringify(updates),
            });
            const data = await response.json();
            await fetchNotifications();
            toast.success('Notification modifiée');
            return data;
        } catch (error) {
            console.error('Erreur lors de la modification:', error);
            toast.error('Erreur lors de la modification');
        } finally {
            setIsLoading(false);
        }
    };

    // Marquer comme lu
    const markAsRead = async (id: number) => {
        try {
            await fetch(`${API_BASE}/${id}/mark-read`, { 
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                }
            });
            await fetchNotifications();
            await fetchUnreadCount();
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    // Supprimer une notification
    const deleteNotification = async (id: number) => {
        try {
            await fetch(`${API_BASE}/${id}`, { 
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                }
            });
            await fetchNotifications();
            await fetchUnreadCount();
            toast.success('Notification supprimée');
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
            toast.error('Erreur lors de la suppression');
        }
    };

    // Vérifier les notifications à déclencher
    const checkPending = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE}/check-pending`);
            const pending = await response.json();
            
            // Afficher les notifications via toast
            pending.forEach((notification: Notification) => {
                const icon = getIcon(notification.type);
                
                toast(
                    <div>
                        <strong>{icon} {notification.title}</strong>
                        {notification.description && <p className="text-sm mt-1">{notification.description}</p>}
                    </div>,
                    {
                        type: notification.priority === 'high' ? 'error' : notification.priority === 'low' ? 'info' : 'warning',
                        autoClose: notification.priority === 'high' ? false : 5000,
                    }
                );

                // Notification push navigateur
                if (settings?.push_enabled && 'Notification' in window && Notification.permission === 'granted') {
                    new Notification(notification.title, {
                        body: notification.description || '',
                        icon: '/images/logo_proxizen.png',
                        badge: '/images/logo_proxizen.png',
                    });
                }

                // Son (optionnel)
                if (settings?.sound_enabled) {
                    const audio = new Audio('/sounds/notification.mp3');
                    audio.play().catch(() => {});
                }
            });

            if (pending.length > 0) {
                await fetchNotifications();
                await fetchUnreadCount();
            }
        } catch (error) {
            console.error('Erreur lors de la vérification:', error);
        }
    }, [settings]);

    // Demander la permission pour les notifications push
    const requestPushPermission = async () => {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission();
            return permission === 'granted';
        }
        return false;
    };

    // Mettre à jour les settings
    const updateSettings = async (newSettings: Partial<NotificationSettings>) => {
        try {
            const response = await fetch(`${API_BASE}/settings`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: JSON.stringify(newSettings),
            });
            const data = await response.json();
            setSettings(data);
            toast.success('Paramètres mis à jour');
        } catch (error) {
            console.error('Erreur:', error);
            toast.error('Erreur lors de la mise à jour');
        }
    };

    // Initialisation
    useEffect(() => {
        fetchNotifications();
        fetchUnreadCount();
        fetchSettings();

        // Vérifier les notifications en attente toutes les 30 secondes
        const interval = setInterval(checkPending, 30000);

        return () => clearInterval(interval);
    }, [fetchNotifications, fetchUnreadCount, fetchSettings, checkPending]);

    return {
        notifications,
        unreadCount,
        settings,
        isLoading,
        createNotification,
        updateNotification,
        deleteNotification,
        markAsRead,
        fetchNotifications,
        requestPushPermission,
        updateSettings,
        getIcon,
        getTypeLabel,
    };
}
