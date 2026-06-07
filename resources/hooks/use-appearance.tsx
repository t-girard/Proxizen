import { useCallback, useEffect, useState } from 'react';

export type Appearance = 'light' | 'dark' | 'system';
export type ColorBlindMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';

const prefersDark = () => {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const applyTheme = (appearance: Appearance) => {
    const isDark =
        appearance === 'dark' || (appearance === 'system' && prefersDark());

    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    
    // Synchroniser avec localStorage pour la navbar
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
};

const applyColorBlindMode = (mode: ColorBlindMode) => {
    // Retirer tous les modes précédents
    document.documentElement.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    
    // Appliquer le nouveau mode si ce n'est pas "none"
    if (mode !== 'none') {
        document.documentElement.classList.add(mode);
    }
};

const mediaQuery = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
};

const handleSystemThemeChange = () => {
    const currentAppearance = localStorage.getItem('appearance') as Appearance;
    applyTheme(currentAppearance || 'system');
};

export function initializeTheme() {
    const savedAppearance =
        (localStorage.getItem('appearance') as Appearance) || 'system';

    applyTheme(savedAppearance);

    // Initialiser le mode daltonien
    const savedColorBlindMode = 
        (localStorage.getItem('colorBlindMode') as ColorBlindMode) || 'none';
    applyColorBlindMode(savedColorBlindMode);

    // Add the event listener for system theme changes...
    mediaQuery()?.addEventListener('change', handleSystemThemeChange);
}

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('system');
    const [colorBlindMode, setColorBlindMode] = useState<ColorBlindMode>('none');

    const updateAppearance = useCallback((mode: Appearance) => {
        setAppearance(mode);

        // Store in localStorage for client-side persistence...
        localStorage.setItem('appearance', mode);

        // Store in cookie for SSR...
        setCookie('appearance', mode);

        applyTheme(mode);
        
        // Déclencher un événement personnalisé pour notifier les autres composants
        window.dispatchEvent(new CustomEvent('appearance-changed', { detail: mode }));
    }, []);

    const updateColorBlindMode = useCallback((mode: ColorBlindMode) => {
        setColorBlindMode(mode);
        
        // Store in localStorage
        localStorage.setItem('colorBlindMode', mode);
        
        // Store in cookie for SSR
        setCookie('colorBlindMode', mode);
        
        applyColorBlindMode(mode);
    }, []);

    useEffect(() => {
        const savedAppearance = localStorage.getItem(
            'appearance',
        ) as Appearance | null;

        const savedColorBlindMode = localStorage.getItem(
            'colorBlindMode',
        ) as ColorBlindMode | null;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (savedAppearance) {
            setAppearance(savedAppearance);
            applyTheme(savedAppearance);
        }
        
        if (savedColorBlindMode) {
            setColorBlindMode(savedColorBlindMode);
            applyColorBlindMode(savedColorBlindMode);
        }

        // Écouter les changements depuis la navbar
        const handleAppearanceChange = (e: CustomEvent) => {
            const isDark = document.documentElement.classList.contains('dark');
            const newAppearance: Appearance = isDark ? 'dark' : 'light';
            setAppearance(newAppearance);
        };

        window.addEventListener('appearance-changed', handleAppearanceChange as EventListener);

        return () => {
            mediaQuery()?.removeEventListener(
                'change',
                handleSystemThemeChange,
            );
            window.removeEventListener('appearance-changed', handleAppearanceChange as EventListener);
        };
    }, []);

    return { appearance, updateAppearance, colorBlindMode, updateColorBlindMode } as const;
}
