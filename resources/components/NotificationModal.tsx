import { useState, useEffect } from 'react';
import { Notification, NotificationType, NotificationPriority } from '@/hooks/useNotifications';

interface NotificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (notification: any) => void;
    notification?: Notification | null;
}

export default function NotificationModal({ isOpen, onClose, onSave, notification }: NotificationModalProps) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: 'info' as NotificationType,
        priority: 'normal' as NotificationPriority,
        date: '',
        hour: 9,
        minute: 0,
        endDate: '',
        endHour: 10,
        endMinute: 0,
        hasEndTime: false,
    });

    useEffect(() => {
        if (notification) {
            const triggerDate = new Date(notification.trigger_at);
            const endDate = notification.end_at ? new Date(notification.end_at) : null;
            
            setFormData({
                title: notification.title,
                description: notification.description || '',
                type: notification.type,
                priority: notification.priority,
                date: triggerDate.toISOString().split('T')[0],
                hour: triggerDate.getHours(),
                minute: triggerDate.getMinutes(),
                endDate: endDate ? endDate.toISOString().split('T')[0] : '',
                endHour: endDate ? endDate.getHours() : 10,
                endMinute: endDate ? endDate.getMinutes() : 0,
                hasEndTime: !!notification.end_at,
            });
        } else {
            // Date par défaut : demain à 9h00
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            setFormData({
                title: '',
                description: '',
                type: 'info',
                priority: 'normal',
                date: tomorrow.toISOString().split('T')[0],
                hour: 9,
                minute: 0,
                endDate: tomorrow.toISOString().split('T')[0],
                endHour: 10,
                endMinute: 0,
                hasEndTime: false,
            });
        }
    }, [notification, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Construire la date/heure de début
        const triggerDateTime = new Date(formData.date);
        triggerDateTime.setHours(formData.hour, formData.minute, 0, 0);
        
        // Construire la date/heure de fin si activée
        let endDateTime = null;
        if (formData.hasEndTime && formData.endDate) {
            endDateTime = new Date(formData.endDate);
            endDateTime.setHours(formData.endHour, formData.endMinute, 0, 0);
        }
        
        const dataToSend = {
            title: formData.title,
            description: formData.description,
            type: formData.type,
            priority: formData.priority,
            trigger_at: triggerDateTime.toISOString(),
            end_at: endDateTime ? endDateTime.toISOString() : null,
        };
        
        onSave(dataToSend);
        onClose();
    };

    if (!isOpen) return null;

    const types = [
        { value: 'medical', label: '🏥 Rendez-vous médical' },
        { value: 'medication', label: '💊 Rappel médicament' },
        { value: 'call', label: '📞 Appel à passer' },
        { value: 'document', label: '📄 Document à vérifier' },
        { value: 'urgent', label: '⚠️ Alerte urgente' },
        { value: 'info', label: 'ℹ️ Information' },
        { value: 'other', label: '🔔 Autre' },
    ];

    const priorities = [
        { value: 'low', label: '🟢 Basse' },
        { value: 'normal', label: '🔵 Normale' },
        { value: 'high', label: '🔴 Haute' },
    ];

    // Date minimale = aujourd'hui
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
                
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-800 z-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {notification ? 'Modifier la notification' : 'Nouvelle notification'}
                    </h2>
                    <button
                        onClick={onClose}
                        type="button"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Titre <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ex: Rendez-vous chez le médecin"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Description
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            placeholder="Détails supplémentaires..."
                            rows={3}
                        />
                    </div>

                    {/* Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Type <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {types.map((type) => (
                                <button
                                    key={type.value}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, type: type.value as NotificationType })}
                                    className={`
                                        p-3 rounded-xl border-2 transition text-left
                                        ${formData.type === type.value 
                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                        }
                                    `}
                                >
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {type.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Priorité <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {priorities.map((priority) => (
                                <button
                                    key={priority.value}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, priority: priority.value as NotificationPriority })}
                                    className={`
                                        p-3 rounded-xl border-2 transition
                                        ${formData.priority === priority.value 
                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                        }
                                    `}
                                >
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {priority.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Date et heure de début */}
                    <div className="space-y-3">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Date et heure de notification <span className="text-red-500">*</span>
                        </label>
                        
                        {/* Date */}
                        <div>
                            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">📅 Date</label>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                min={today}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                                required
                            />
                        </div>

                        {/* Heure et minute - INPUT NUMBER avec flèches ↑↓ */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">⏰ Heure</label>
                                <input
                                    type="number"
                                    value={formData.hour}
                                    onChange={(e) => setFormData({ ...formData, hour: Math.max(0, Math.min(23, parseInt(e.target.value) || 0)) })}
                                    onFocus={(e) => e.target.select()}
                                    min="0"
                                    max="23"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl font-bold text-center"
                                    required
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">heures (0-23)</p>
                            </div>
                            <div>
                                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">⏱️ Minutes</label>
                                <input
                                    type="number"
                                    value={formData.minute}
                                    onChange={(e) => setFormData({ ...formData, minute: Math.max(0, Math.min(59, parseInt(e.target.value) || 0)) })}
                                    onFocus={(e) => e.target.select()}
                                    min="0"
                                    max="59"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl font-bold text-center"
                                    required
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">minutes (0-59)</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                            💡 Utilisez les flèches ↑ ↓ pour ajuster l'heure
                        </p>
                    </div>

                    {/* Heure de fin (optionnel) */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="hasEndTime"
                                checked={formData.hasEndTime}
                                onChange={(e) => setFormData({ ...formData, hasEndTime: e.target.checked })}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="hasEndTime" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Ajouter une heure de fin
                            </label>
                        </div>

                        {formData.hasEndTime && (
                            <>
                                <div>
                                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">📅 Date de fin</label>
                                    <input
                                        type="date"
                                        value={formData.endDate}
                                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                        min={formData.date || today}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">⏰ Heure de fin</label>
                                        <input
                                            type="number"
                                            value={formData.endHour}
                                            onChange={(e) => setFormData({ ...formData, endHour: Math.max(0, Math.min(23, parseInt(e.target.value) || 0)) })}
                                            onFocus={(e) => e.target.select()}
                                            min="0"
                                            max="23"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl font-bold text-center"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">⏱️ Minutes de fin</label>
                                        <input
                                            type="number"
                                            value={formData.endMinute}
                                            onChange={(e) => setFormData({ ...formData, endMinute: Math.max(0, Math.min(59, parseInt(e.target.value) || 0)) })}
                                            onFocus={(e) => e.target.select()}
                                            min="0"
                                            max="59"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl font-bold text-center"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition"
                        >
                            {notification ? 'Modifier' : 'Créer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
