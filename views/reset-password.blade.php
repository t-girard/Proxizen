<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>réinitialisation du mot de passe</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="../css/reset-password.css" rel="stylesheet">
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
    </header>

    <main class="max-w-7xl mx-auto px-6 py-8">
        
        <div>
            <h1>Réinitialiser votre mot de passe</h1>
        </div>

        <div>
            <p>adresse mail ou numéro de téléphone associé à votre compte</p>
            <input type="text" placeholder="exemple@email.com">
        </div>

        <div class="button-container">
            <button class="btn btn-primary">retourner à la page de connexion</button>
            <button class="btn btn-secondary">recevoir email</button>
        </div>

    </main>

</body>
</html>