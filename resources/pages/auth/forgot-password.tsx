import { Head } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const generateToken = () => {
        return Math.random().toString(36).substring(2, 15) + 
               Math.random().toString(36).substring(2, 15) + 
               Date.now().toString(36);
    };
    

    const handleForgotPassword = async (e: FormEvent) => {
        e.preventDefault();

        setSuccessMessage('');
        setErrorMessage('');
        setIsLoading(true);

        
        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service_id: 'service_l8gott5',
                    template_id: 'template_tfy7q2v',
                    user_id: 'Np3pnPwaq8IHCVzkb',
                    template_params: {
                        to_email: email,
                        reset_link: `http://152.77.90.121/reset-password?email=${encodeURIComponent(email)}&token=${generateToken()}`
                    }
                })
            });

            setIsLoading(false);

            if (response.ok) {
                setSuccessMessage('Un email de réinitialisation a été envoyé à ' + email);
                setEmail('');
                setTimeout(() => window.location.href = '/login', 3000);
            } else {
                setErrorMessage('Erreur lors de l\'envoi. Réessayez.');
            }
        } catch (error) {
            setIsLoading(false);
            setErrorMessage('Impossible de se connecter au serveur.');
        }
    };

    return (
        <>
            <Head title="Mot de passe oublié" />
            <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md border border-white/20 dark:border-gray-700/50">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Mot de passe oublié</h1>
                        <p className="text-gray-600 dark:text-gray-400">Entrez votre email pour recevoir un lien</p>
                    </div>

                    {successMessage && (
                        <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                            <p className="text-sm text-green-800 dark:text-green-400">{successMessage}</p>
                        </div>
                    )}

                    {errorMessage && (
                        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <p className="text-sm text-red-800 dark:text-red-400">{errorMessage}</p>
                        </div>
                    )}

                    <form onSubmit={handleForgotPassword} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                                placeholder="votre.email@exemple.fr"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white font-semibold rounded-xl hover:shadow-lg disabled:opacity-70 transition"
                        >
                            {isLoading ? 'Envoi...' : 'Envoyer le lien'}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                        <a href="/login" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold">Retour à la connexion</a>
                    </p>
                </div>
            </div>
        </>
    );
}