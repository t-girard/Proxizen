<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proxizen - Connexion</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="../css/login.css" rel="stylesheet">
</head>
<body class="gradient-bg min-h-screen flex items-center justify-center p-4">
    
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl floating"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl floating" style="animation-delay: 1s;"></div>
    </div>

    <div class="glass-card rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md relative z-10">
        
        <div class="text-center mb-8">
            <img src="proxizen.png" alt="Proxizen" class="w-20 h-20 rounded-2xl mx-auto mb-4 shadow-xl" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <!-- Fallback si l'image ne charge pas -->
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl" style="display: none;">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            </div>
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Proxizen</h1>
            <p class="text-gray-600">Assistance aux aidants familiaux</p>
        </div>

        <form onsubmit="handleLogin(event)" class="space-y-5">
            
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Adresse email</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                        </svg>
                    </div>
                    <input 
                        type="email" 
                        id="email" 
                        value="marie.dupont@email.fr"
                        class="input-focus w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none transition"
                        placeholder="votre.email@exemple.fr"
                        required
                    >
                </div>
            </div>

            <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                    </div>
                    <input 
                        type="password" 
                        id="password" 
                        value="demo123"
                        class="input-focus w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none transition"
                        placeholder="••••••••"
                        required
                    >
                </div>
            </div>

            <div class="flex items-center justify-between text-sm">
                <label class="flex items-center cursor-pointer">
                    <input type="checkbox" class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500">
                    <span class="ml-2 text-gray-600">Se souvenir de moi</span>
                </label>
                <a href="#" class="text-purple-600 hover:text-purple-700 font-medium">Mot de passe oublié ?</a>
            </div>

            <button 
                type="submit" 
                class="btn-primary w-full py-3 text-white font-semibold rounded-xl"
            >
                Se connecter
            </button>

        </form>

        <div class="mt-6 pt-6 border-t border-gray-200">
            <p class="text-center text-sm text-gray-600">
                Pas encore de compte ? 
                <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">Créer un compte</a>
            </p>
        </div>

        <div class="mt-6 text-center">
            <p class="text-xs text-gray-500">
                🎓 Prototype de démonstration - SAÉ IUT2 Grenoble
            </p>
        </div>
    </div>

    <script>
        function handleLogin(event) {
            event.preventDefault();
            
            // Animation de chargement
            const button = event.target.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.innerHTML = '<svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
            button.disabled = true;
            
            // Simulation connexion
            setTimeout(() => {
                window.location.href = '{{ url('/index') }}';
            }, 1000);
        }

        // Effet de particules au survol du logo
        document.addEventListener('DOMContentLoaded', () => {
            const logo = document.querySelector('.w-20.h-20');
            logo.addEventListener('mouseenter', () => {
                logo.style.transform = 'scale(1.1) rotate(5deg)';
            });
            logo.addEventListener('mouseleave', () => {
                logo.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    </script>

</body>
</html>
