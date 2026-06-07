<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proxizen - Accueil</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="../css/index.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
    
    <!-- Header -->
    <header class="header bg-white border-b border-gray-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <!-- Logo et titre -->
                <div class="flex items-center gap-3">
                    <img src="proxizen.png" alt="Proxizen" class="w-12 h-12 rounded-xl shadow-lg" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <!-- Fallback si l'image ne charge pas -->
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg" style="display: none;">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Proxizen</h1>
                        <p class="text-xs text-gray-600 dark:text-gray-400">Assistance aux aidants</p>
                    </div>
                </div>

                <!-- Navigation centrale -->
                <nav class="hidden md:flex items-center gap-2">
                    <a href="{{ url('/index') }}" class="nav-link active px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        Accueil
                    </a>
                    <a href="{{ url('/calendrier') }}" class="nav-link px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Calendrier
                    </a>
                    <a href="{{ url('/intervenants') }}" class="nav-link px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        Intervenants
                    </a>
                    <a href="{{ url('/documents') }}" class="nav-link px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Documents
                    </a>
                    <a href="{{ url('/contacts') }}" class="nav-link px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Contacts
                    </a>
                </nav>
                
                <!-- Actions droite -->
                <div class="flex items-center gap-4">
                    <button onclick="toggleDarkMode()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg id="sun-icon" class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </button>
                    
                    <div class="relative">
                        <button onclick="toggleNotifications()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition relative">
                            <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                            <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></span>
                        </button>
                        
                        <div id="notification-popup" class="hidden absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                                <h3 class="font-semibold text-gray-800 dark:text-white">Notifications</h3>
                            </div>
                            <div class="p-2 max-h-96 overflow-y-auto">
                                <div class="p-3 mb-2 bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-lg cursor-pointer transition">
                                    <div class="flex items-start gap-3">
                                        <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-gray-800 dark:text-white">RDV en approche</p>
                                            <p class="text-xs text-gray-600 dark:text-gray-300">Dr. Rousseau dans 2h (17h15)</p>
                                            <p class="text-xs text-gray-400 mt-1">Il y a 5 min</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="p-3 mb-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition">
                                    <div class="flex items-start gap-3">
                                        <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-gray-800 dark:text-white">Passage effectué</p>
                                            <p class="text-xs text-gray-600 dark:text-gray-300">Aide à domicile - 14h00</p>
                                            <p class="text-xs text-gray-400 mt-1">Il y a 30 min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700 relative">
                        <div class="text-right hidden sm:block">
                            <p class="text-sm font-semibold text-gray-800 dark:text-white">Marie Dupont</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Aidante principale</p>
                        </div>
                        <div class="relative">
                            <button onclick="toggleUserMenu()" class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:ring-4 hover:ring-blue-100 transition cursor-pointer">
                                <span class="text-white font-semibold">MD</span>
                            </button>
                            
                            <!-- Dropdown menu -->
                            <div id="user-menu" class="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                                <div class="p-3 border-b border-gray-200 dark:border-gray-700">
                                    <p class="font-semibold text-gray-800 dark:text-white">Marie Dupont</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">marie.dupont@email.fr</p>
                                </div>
                                <div class="p-2">
                                    <a href="#" class="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                        Mon profil
                                    </a>
                                    <a href="#" class="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        Paramètres
                                    </a>
                                </div>
                                <div class="p-2 border-t border-gray-200 dark:border-gray-700">
                                    <a href="{{ url('/login') }}" class="block px-3 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                        Déconnexion
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-8">
        
        <!-- En-tête avec salutation -->
        <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">Bonjour Marie 👋</h2>
            <p class="text-gray-600 dark:text-gray-400">Voici votre planning pour aujourd'hui</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <!-- Calendrier du jour - colonne principale -->
            <div class="lg:col-span-2">
                <div class="card bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    
                    <div class="flex justify-between items-center mb-6">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Aujourd'hui</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Lundi 6 janvier 2026</p>
                        </div>
                        <div class="flex gap-2">
                            <a href="{{ url('/calendrier') }}" class="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                Voir la semaine
                            </a>
                            <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                                Ajouter
                            </button>
                        </div>
                    </div>

                    <div class="event-timeline space-y-4 pl-10">
                        
                        <!-- Événement 09h -->
                        <div class="relative">
                            <div class="absolute -left-10 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                09h
                            </div>
                            <div class="event-card bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
                                <div class="flex justify-between items-start mb-2">
                                    <div class="flex items-center gap-2">
                                        <span class="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">URGENT</span>
                                        <span class="text-xs text-gray-500 dark:text-gray-400">09:00 - 09:30</span>
                                    </div>
                                </div>
                                <h4 class="font-semibold text-gray-800 dark:text-white mb-1">Infirmière - Mme Dupont</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300">💉 Injection insuline</p>
                            </div>
                        </div>

                        <!-- Événement 14h -->
                        <div class="relative">
                            <div class="absolute -left-10 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                14h
                            </div>
                            <div class="event-card bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
                                <div class="flex justify-between items-start mb-2">
                                    <span class="text-xs text-gray-500 dark:text-gray-400">14:00 - 16:00</span>
                                </div>
                                <h4 class="font-semibold text-gray-800 dark:text-white mb-1">Aide à domicile - M. Martin</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300">🏠 Ménage et courses</p>
                            </div>
                        </div>

                        <!-- Événement 16h -->
                        <div class="relative">
                            <div class="absolute -left-10 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                16h
                            </div>
                            <div class="event-card bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
                                <div class="flex justify-between items-start mb-2">
                                    <span class="text-xs text-gray-500 dark:text-gray-400">16:30</span>
                                </div>
                                <h4 class="font-semibold text-gray-800 dark:text-white mb-1">Rappel médicament</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300">💊 Doliprane 1g</p>
                            </div>
                        </div>

                        <!-- Événement 17h -->
                        <div class="relative">
                            <div class="absolute -left-10 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                17h
                            </div>
                            <div class="event-card bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
                                <div class="flex justify-between items-start mb-2">
                                    <span class="text-xs text-gray-500 dark:text-gray-400">17:15 - 17:45</span>
                                </div>
                                <h4 class="font-semibold text-gray-800 dark:text-white mb-1">Rendez-vous - Dr. Rousseau</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300">🩺 Consultation cardiologie</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">📍 Cabinet médical, 12 rue Victor Hugo</p>
                            </div>
                        </div>

                        <!-- Événement 18h -->
                        <div class="relative">
                            <div class="absolute -left-10 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                18h
                            </div>
                            <div class="event-card bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
                                <div class="flex justify-between items-start mb-2">
                                    <span class="text-xs text-gray-500 dark:text-gray-400">18:00 - 18:45</span>
                                </div>
                                <h4 class="font-semibold text-gray-800 dark:text-white mb-1">Kinésithérapeute</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-300">🦵 Rééducation jambe droite</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Sidebar droite -->
            <div class="space-y-6">
                
                <!-- Carte personne aidée -->
                <div class="card bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            JD
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 dark:text-white">Jean Dupont</h4>
                            <p class="text-sm text-gray-500 dark:text-gray-400">84 ans • GIR 3</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                            <p class="text-gray-500 dark:text-gray-400">Dernière visite</p>
                            <p class="font-semibold text-gray-800 dark:text-white">Hier 14h</p>
                        </div>
                        <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded">
                            <p class="text-gray-500 dark:text-gray-400">État général</p>
                            <p class="font-semibold text-green-600">Stable</p>
                        </div>
                    </div>
                </div>

                <!-- Accès rapides -->
                <div class="card bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h4 class="font-semibold text-gray-800 dark:text-white mb-4">Accès rapides</h4>
                    
                    <div class="grid grid-cols-2 gap-3">
                        
                        <a href="{{ url('/calendrier') }}" class="icon-btn flex flex-col items-center gap-2 p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-xl transition">
                            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Calendrier</span>
                        </a>

                        <a href="{{ url('/intervenants') }}" class="icon-btn flex flex-col items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 rounded-xl transition">
                            <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Intervenants</span>
                        </a>

                        <a href="{{ url('/contacts') }}" class="icon-btn flex flex-col items-center gap-2 p-4 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 rounded-xl transition">
                            <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Contacts</span>
                        </a>

                        <a href="{{ url('/documents') }}" class="icon-btn flex flex-col items-center gap-2 p-4 bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/40 rounded-xl transition">
                            <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Documents</span>
                        </a>

                        <button class="icon-btn flex flex-col items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-xl transition">
                            <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                </svg>
                            </div>
                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Médicaments</span>
                        </button>

                        <button class="icon-btn flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-xl transition">
                            <div class="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Paramètres</span>
                        </button>

                    </div>
                </div>

            </div>

        </div>

    </main>

    <script>
        // Charger le mode sombre depuis localStorage au démarrage
        window.addEventListener('DOMContentLoaded', () => {
            if (localStorage.getItem('darkMode') === 'enabled') {
                document.body.classList.add('dark-mode');
            }
        });

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            
            // Sauvegarder la préférence
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        }

        function toggleNotifications() {
            const popup = document.getElementById('notification-popup');
            popup.classList.toggle('hidden');
        }

        function toggleUserMenu() {
            const menu = document.getElementById('user-menu');
            menu.classList.toggle('hidden');
        }

        // Fermer les notifications en cliquant en dehors
        document.addEventListener('click', (e) => {
            const popup = document.getElementById('notification-popup');
            const notifButton = e.target.closest('button[onclick="toggleNotifications()"]');
            
            if (!notifButton && !popup.contains(e.target)) {
                popup.classList.add('hidden');
            }

            // Fermer le menu utilisateur en cliquant en dehors
            const menu = document.getElementById('user-menu');
            const userButton = e.target.closest('button[onclick="toggleUserMenu()"]');
            
            if (!userButton && !menu.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });
    </script>

</body>
</html>