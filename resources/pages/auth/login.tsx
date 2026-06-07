import { useForm, Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <>
      <Head title="Connexion" />

      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">

        {/* Card */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md relative z-10 border border-white/20 dark:border-gray-700/50">

          {/* Header */}
          <div className="text-center mb-8">
            <img
              src="/images/logo_proxizen.png"
              alt="Proxizen"
              className="w-20 h-20 rounded-2xl mx-auto mb-4 shadow-xl"
            />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Proxizen</h1>
            <p className="text-gray-600 dark:text-gray-400">Assistance aux aidants familiaux</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="input-focus w-full pl-3 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none transition"
                  placeholder="email@exemple.fr"
                  required
                />
              </div>
              {errors.email && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  className="input-focus w-full pl-3 pr-10 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none transition"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.password}</p>}
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-600 dark:text-gray-400">Se souvenir de moi</span>
              </label>
              <Link href="/forgot-password" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary w-full py-3 text-white font-semibold rounded-xl"
              disabled={processing}
            >
              {processing ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            Pas encore de compte ?{' '}
            <Link href="/register" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold">
              Créer un compte
            </Link>
          </div>

        </div>

        {/* Styles personnalisés */}
        <style>{`
          * { font-family: 'Inter', sans-serif; }
          .input-focus:focus { 
            border-color: #667eea; 
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); 
          }
          .dark .input-focus:focus {
            border-color: #818cf8;
            box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.1);
          }
          .btn-primary { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            transition: transform 0.2s ease, box-shadow 0.2s ease; 
          }
          .btn-primary:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 10px 25px -5px rgba(102, 126, 234, 0.4); 
          }
          .dark .btn-primary {
            background: linear-gradient(135deg, #818cf8 0%, #a855f7 100%);
          }
        `}</style>
      </div>
    </>
  );
}
