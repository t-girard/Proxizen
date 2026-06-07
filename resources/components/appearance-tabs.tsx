import { Appearance, ColorBlindMode, useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { LucideIcon, Monitor, Moon, Sun, Eye, EyeOff } from 'lucide-react';
import { HTMLAttributes } from 'react';

export default function AppearanceToggleTab({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { appearance, updateAppearance, colorBlindMode, updateColorBlindMode } = useAppearance();

    const tabs: { value: Appearance; icon: LucideIcon; label: string }[] = [
        { value: 'light', icon: Sun, label: 'Clair' },
        { value: 'dark', icon: Moon, label: 'Sombre' },
        { value: 'system', icon: Monitor, label: 'Système' },
    ];

    const colorBlindModes: { value: ColorBlindMode; label: string; description: string }[] = [
        { value: 'none', label: 'Normal', description: 'Vision normale' },
        { value: 'protanopia', label: 'Protanopie', description: 'Daltonisme rouge-vert' },
        { value: 'deuteranopia', label: 'Deutéranopie', description: 'Daltonisme vert-rouge' },
        { value: 'tritanopia', label: 'Tritanopie', description: 'Daltonisme bleu-jaune' },
    ];

    return (
        <div className="space-y-8">
            {/* Section Thème */}
            <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Thème
                </h3>
                <div
                    className={cn(
                        'inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800',
                        className,
                    )}
                    {...props}
                >
                    {tabs.map(({ value, icon: Icon, label }) => (
                        <button
                            key={value}
                            onClick={() => updateAppearance(value)}
                            className={cn(
                                'flex items-center rounded-md px-3.5 py-1.5 transition-colors',
                                appearance === value
                                    ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                                    : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                            )}
                        >
                            <Icon className="-ml-1 h-4 w-4" />
                            <span className="ml-1.5 text-sm">{label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Section Mode Daltonien */}
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        Mode d'accessibilité visuelle
                    </h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Ajustez les couleurs pour améliorer la lisibilité selon votre type de vision
                </p>
                
                <div className="space-y-2">
                    {colorBlindModes.map(({ value, label, description }) => (
                        <button
                            key={value}
                            onClick={() => updateColorBlindMode(value)}
                            className={cn(
                                'w-full text-left px-4 py-3 rounded-lg border-2 transition-all',
                                colorBlindMode === value
                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800',
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                        {label}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                        {description}
                                    </p>
                                </div>
                                {colorBlindMode === value && (
                                    <div className="flex-shrink-0">
                                        <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Aperçu des couleurs */}
                {colorBlindMode !== 'none' && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                            Aperçu des couleurs :
                        </p>
                        <div className="flex gap-2">
                            <div className="flex-1 h-12 bg-red-500 rounded flex items-center justify-center">
                                <span className="text-xs text-white font-medium">Rouge</span>
                            </div>
                            <div className="flex-1 h-12 bg-green-500 rounded flex items-center justify-center">
                                <span className="text-xs text-white font-medium">Vert</span>
                            </div>
                            <div className="flex-1 h-12 bg-blue-500 rounded flex items-center justify-center">
                                <span className="text-xs text-white font-medium">Bleu</span>
                            </div>
                            <div className="flex-1 h-12 bg-yellow-500 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-900 font-medium">Jaune</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
