export const initDarkMode = () => {
    // Vérifier d'abord le système use-appearance
    const appearance = localStorage.getItem('appearance');
    
    if (appearance === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    } else if (appearance === 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    } else if (appearance === 'system') {
        // Mode système : vérifier la préférence du navigateur
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    } else {
        // Fallback sur l'ancien système
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.documentElement.classList.add('dark');
        }
    }
};

export const toggleDarkMode = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    
    document.documentElement.classList.toggle('dark');
    
    const isDark = document.documentElement.classList.contains('dark');
    
    // Mettre à jour les deux systèmes
    if (isDark) {
        localStorage.setItem('darkMode', 'enabled');
        localStorage.setItem('appearance', 'dark');
    } else {
        localStorage.setItem('darkMode', 'disabled');
        localStorage.setItem('appearance', 'light');
    }
    
    // Notifier les autres composants
    window.dispatchEvent(new CustomEvent('appearance-changed', { 
        detail: isDark ? 'dark' : 'light' 
    }));
};
