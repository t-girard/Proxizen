<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proxizen - Calendrier</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="../css/calendrier.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
    
    <!-- Header -->
    <header class="header bg-white border-b border-gray-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
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

                <nav class="hidden md:flex items-center gap-2">
                    <a href="{{ url('/index') }}" class="nav-link px-4 py-2 rounded-lg font-medium text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        Accueil
                    </a>
                    <a href="{{ url('/calendrier') }}" class="nav-link active px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">
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
                </nav>
                
                <div class="flex items-center gap-4">
                    <button onclick="toggleDarkMode()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </button>
                    
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
        
        <!-- En-tête calendrier -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
                <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">Calendrier</h2>
                <p class="text-gray-600 dark:text-gray-400">Semaine du 6 au 12 janvier 2026</p>
            </div>
            
            <div class="flex flex-wrap gap-3">
                <!-- Filtres de vue -->
                <div class="flex gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                    <button onclick="changeView('day')" id="view-day" class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition">
                        Jour
                    </button>
                    <button onclick="changeView('week')" id="view-week" class="px-3 py-2 rounded-md text-sm font-medium bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm transition">
                        Semaine
                    </button>
                    <button onclick="changeView('month')" id="view-month" class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition">
                        Mois
                    </button>
                </div>
                
                <!-- Navigation -->
                <button class="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Précédent
                </button>
                <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition">
                    Aujourd'hui
                </button>
                <button class="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition flex items-center gap-2">
                    Suivant
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
                
                <!-- Bouton créer événement -->
                <button onclick="openEventModal()" class="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition flex items-center gap-2 shadow-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    Créer événement
                </button>
            </div>
        </div>

        <!-- Vue semaine -->
        <div class="card bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            
            <!-- En-têtes jours -->
            <div class="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700">
                <div class="p-4 text-center border-r border-gray-200 dark:border-gray-700">
                    <p class="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Lun</p>
                    <p class="text-2xl font-bold text-blue-500 mt-1">6</p>
                </div>
                <div class="p-4 text-center border-r border-gray-200 dark:border-gray-700">
                    <p class="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Mar</p>
                    <p class="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-1">7</p>
                </div>
                <div class="p-4 text-center border-r border-gray-200 dark:border-gray-700">
                    <p class="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Mer</p>
                    <p class="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-1">8</p>
                </div>
                <div class="p-4 text-center border-r border-gray-200 dark:border-gray-700">
                    <p class="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Jeu</p>
                    <p class="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-1">9</p>
                </div>
                <div class="p-4 text-center border-r border-gray-200 dark:border-gray-700">
                    <p class="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Ven</p>
                    <p class="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-1">10</p>
                </div>
                <div class="p-4 text-center border-r border-gray-200 dark:border-gray-700">
                    <p class="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Sam</p>
                    <p class="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-1">11</p>
                </div>
                <div class="p-4 text-center">
                    <p class="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Dim</p>
                    <p class="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-1">12</p>
                </div>
            </div>

            <!-- Grille événements -->
            <div class="grid grid-cols-7">
                
                <!-- Lundi 6 - AUJOURD'HUI -->
                <div class="calendar-cell p-3 border-r border-b border-gray-200 dark:border-gray-700 bg-blue-50/30 dark:bg-blue-900/10">
                    <div class="calendar-event bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-l-2 border-red-500">
                        <p class="font-semibold">09:00 Infirmière</p>
                        <p class="text-xs opacity-75">💉 Injection</p>
                    </div>
                    <div class="calendar-event bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-l-2 border-green-500">
                        <p class="font-semibold">14:00 Aide domicile</p>
                        <p class="text-xs opacity-75">🏠 Ménage</p>
                    </div>
                    <div class="calendar-event bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-l-2 border-teal-500">
                        <p class="font-semibold">17:15 Dr. Rousseau</p>
                        <p class="text-xs opacity-75">🩺 Cardio</p>
                    </div>
                </div>

                <!-- Mardi 7 -->
                <div class="calendar-cell p-3 border-r border-b border-gray-200 dark:border-gray-700">
                    <div class="calendar-event bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-l-2 border-orange-500">
                        <p class="font-semibold">10:00 Médicament</p>
                        <p class="text-xs opacity-75">💊 Aspirine</p>
                    </div>
                    <div class="calendar-event bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-l-2 border-purple-500">
                        <p class="font-semibold">15:30 Kiné</p>
                        <p class="text-xs opacity-75">🦵 Rééducation</p>
                    </div>
                </div>

                <!-- Mercredi 8 -->
                <div class="calendar-cell p-3 border-r border-b border-gray-200 dark:border-gray-700">
                    <div class="calendar-event bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-l-2 border-green-500">
                        <p class="font-semibold">09:00 Aide domicile</p>
                        <p class="text-xs opacity-75">🏠 Courses</p>
                    </div>
                    <div class="calendar-event bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-2 border-blue-500">
                        <p class="font-semibold">14:00 Podologue</p>
                        <p class="text-xs opacity-75">🦶 Soins pieds</p>
                    </div>
                </div>

                <!-- Jeudi 9 -->
                <div class="calendar-cell p-3 border-r border-b border-gray-200 dark:border-gray-700">
                    <div class="calendar-event bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-l-2 border-red-500">
                        <p class="font-semibold">08:30 Prise de sang</p>
                        <p class="text-xs opacity-75">🩸 Labo Pasteur</p>
                    </div>
                    <div class="calendar-event bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-l-2 border-purple-500">
                        <p class="font-semibold">16:00 Kiné</p>
                        <p class="text-xs opacity-75">🦵 Rééducation</p>
                    </div>
                </div>

                <!-- Vendredi 10 -->
                <div class="calendar-cell p-3 border-r border-b border-gray-200 dark:border-gray-700">
                    <div class="calendar-event bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-l-2 border-green-500">
                        <p class="font-semibold">14:00 Aide domicile</p>
                        <p class="text-xs opacity-75">🏠 Ménage</p>
                    </div>
                    <div class="calendar-event bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-l-2 border-yellow-500">
                        <p class="font-semibold">17:00 Coiffeur</p>
                        <p class="text-xs opacity-75">✂️ À domicile</p>
                    </div>
                </div>

                <!-- Samedi 11 -->
                <div class="calendar-cell p-3 border-r border-b border-gray-200 dark:border-gray-700">
                    <div class="calendar-event bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-l-2 border-pink-500">
                        <p class="font-semibold">11:00 Visite famille</p>
                        <p class="text-xs opacity-75">👨‍👩‍👧 Déjeuner</p>
                    </div>
                </div>

                <!-- Dimanche 12 -->
                <div class="calendar-cell p-3 border-b border-gray-200 dark:border-gray-700">
                    <div class="calendar-event bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-l-2 border-indigo-500">
                        <p class="font-semibold">12:00 Repas en famille</p>
                        <p class="text-xs opacity-75">⛪ Maison de Jeanne</p>
                    </div>
                </div>

            </div>
        </div>

        <!-- Bouton d'ajout flottant -->
        <button onclick="openEventModal()" class="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-110">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
        </button>

    </main>

    <!-- Modal création événement -->
    <div id="event-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Créer un événement</h3>
                <button onclick="closeEventModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Titre</label>
                    <input type="text" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="Ex: Rendez-vous médecin">
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type</label>
                    <select class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                        <option>Rendez-vous médical</option>
                        <option>Aide à domicile</option>
                        <option>Médicament</option>
                        <option>Kinésithérapie</option>
                        <option>Autre</option>
                    </select>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                        <input type="date" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Heure</label>
                        <input type="time" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                    </div>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description (optionnel)</label>
                    <textarea rows="3" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="Détails supplémentaires..."></textarea>
                </div>
                
                <div class="flex gap-3 pt-4">
                    <button type="button" onclick="closeEventModal()" class="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition">
                        Annuler
                    </button>
                    <button type="submit" class="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition">
                        Créer
                    </button>
                </div>
            </form>
        </div>
    </div>

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

        function toggleUserMenu() {
            const menu = document.getElementById('user-menu');
            menu.classList.toggle('hidden');
        }

        // Fermer le menu utilisateur en cliquant en dehors
        document.addEventListener('click', (e) => {
            const menu = document.getElementById('user-menu');
            const button = e.target.closest('button[onclick="toggleUserMenu()"]');
            
            if (!button && !menu.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });

        function openEventModal() {
            document.getElementById('event-modal').classList.remove('hidden');
        }

        function closeEventModal() {
            document.getElementById('event-modal').classList.add('hidden');
        }

        // Changer la vue du calendrier
        let currentView = 'week';
        
        function changeView(view) {
            currentView = view;
            
            // Retirer la classe active de tous les boutons
            document.querySelectorAll('[id^="view-"]').forEach(btn => {
                btn.classList.remove('bg-white', 'dark:bg-gray-600', 'text-gray-800', 'dark:text-white', 'shadow-sm');
                btn.classList.add('text-gray-600', 'dark:text-gray-300');
            });
            
            // Ajouter la classe active au bouton cliqué
            const activeBtn = document.getElementById('view-' + view);
            activeBtn.classList.add('bg-white', 'dark:bg-gray-600', 'text-gray-800', 'dark:text-white', 'shadow-sm');
            activeBtn.classList.remove('text-gray-600', 'dark:text-gray-300');
            
            // Changer l'affichage du calendrier
            const calendarGrid = document.querySelector('.grid.grid-cols-7');
            const headerRow = calendarGrid.previousElementSibling;
            
            if (view === 'day') {
                // Vue jour : montrer seulement lundi (première colonne)
                const allCells = calendarGrid.querySelectorAll('.calendar-cell');
                allCells.forEach((cell, index) => {
                    cell.style.display = index === 0 ? 'block' : 'none';
                });
                headerRow.querySelectorAll('div').forEach((header, index) => {
                    header.style.display = index === 0 ? 'block' : 'none';
                });
                calendarGrid.style.gridTemplateColumns = '1fr';
                headerRow.style.gridTemplateColumns = '1fr';
                document.querySelector('.mb-8 p').textContent = 'Lundi 6 janvier 2026';
            } else if (view === 'week') {
                // Vue semaine : montrer tous les jours
                const allCells = calendarGrid.querySelectorAll('.calendar-cell');
                allCells.forEach(cell => cell.style.display = 'block');
                headerRow.querySelectorAll('div').forEach(header => header.style.display = 'block');
                calendarGrid.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))';
                headerRow.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))';
                document.querySelector('.mb-8 p').textContent = 'Semaine du 6 au 12 janvier 2026';
            } else if (view === 'month') {
                // Vue mois : montrer tous les jours (même affichage que semaine pour le prototype)
                const allCells = calendarGrid.querySelectorAll('.calendar-cell');
                allCells.forEach(cell => cell.style.display = 'block');
                headerRow.querySelectorAll('div').forEach(header => header.style.display = 'block');
                calendarGrid.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))';
                headerRow.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))';
                document.querySelector('.mb-8 p').textContent = 'Janvier 2026';
            }
        }

        // Fermer le modal en cliquant en dehors
        document.getElementById('event-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'event-modal') {
                closeEventModal();
            }
        });
    </script>

</body>
</html>
