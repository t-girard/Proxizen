import { useForm, Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';
import RGPDModal from '@/components/RGPDModal';

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms_accepted: false,
    privacy_accepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);
  const [hasReadTerms, setHasReadTerms] = useState(false);
  const [hasReadPrivacy, setHasReadPrivacy] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!data.terms_accepted) {
      alert('Vous devez accepter les conditions générales d\'utilisation');
      return;
    }
    
    if (!data.privacy_accepted) {
      alert('Vous devez accepter la politique de confidentialité');
      return;
    }
    
    if (!hasReadTerms || !hasReadPrivacy) {
      alert('Vous devez lire l\'intégralité des documents avant de continuer');
      return;
    }
    
    post('/register');
  };

  const openModal = (type: 'terms' | 'privacy') => {
    setModalType(type);
  };

  const handleAcceptTerms = () => {
    setHasReadTerms(true);
    setData('terms_accepted', true);
    setModalType(null);
  };

  const handleAcceptPrivacy = () => {
    setHasReadPrivacy(true);
    setData('privacy_accepted', true);
    setModalType(null);
  };

  return (
    <>
      <Head title="Créer un compte" />

      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">

        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md relative z-10 border border-white/20 dark:border-gray-700/50 max-h-[90vh] overflow-y-auto">

          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Créer un compte</h1>

          <form onSubmit={handleRegister} className="space-y-5">

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="input-focus w-full pl-3 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none transition"
                placeholder="Votre nom"
                required
              />
              {errors.name && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="input-focus w-full pl-3 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none transition"
                placeholder="email@exemple.fr"
                required
              />
              {errors.email && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.email}</p>}
            </div>

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

              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm mt-2">
                <li>Minimum 12 caractères</li>
                <li>Au moins 1 majuscule et 1 minuscule</li>
                <li>Au moins 1 chiffre</li>
              </ul>
            </div>

            <div>
              <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPasswordConfirm ? 'text' : 'password'}
                  id="password_confirmation"
                  value={data.password_confirmation}
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  className="input-focus w-full pl-3 pr-10 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none transition"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  {showPasswordConfirm ? (
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
              {errors.password_confirmation && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.password_confirmation}</p>
              )}
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Veuillez lire les condition génerales d'utilisation ainsi que notre politique de confidentialité pour les accepter</h3>
              
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={data.terms_accepted}
                  onChange={(e) => setData('terms_accepted', e.target.checked)}
                  disabled={!hasReadTerms}
                  className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                  J'accepte les{' '}
                  <button
                    type="button"
                    onClick={() => openModal('terms')}
                    className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                  >
                    Conditions Générales d'Utilisation
                  </button>
                  {!hasReadTerms && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
                  {hasReadTerms && <span className="text-green-600 dark:text-green-400 ml-1">✓ Lu</span>}
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={data.privacy_accepted}
                  onChange={(e) => setData('privacy_accepted', e.target.checked)}
                  disabled={!hasReadPrivacy}
                  className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                  J'accepte la{' '}
                  <button
                    type="button"
                    onClick={() => openModal('privacy')}
                    className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                  >
                    Politique de Confidentialité et le traitement de mes données
                  </button>
                  {!hasReadPrivacy && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
                  {hasReadPrivacy && <span className="text-green-600 dark:text-green-400 ml-1">✓ Lu</span>}
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={processing || !data.terms_accepted || !data.privacy_accepted || !hasReadTerms || !hasReadPrivacy}
            >
              {processing ? 'Création...' : 'Créer un compte'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            Déjà un compte ?{' '}
            <Link href="/login" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold">
              Se connecter
            </Link>
          </div>
        </div>

        <RGPDModal
          isOpen={modalType === 'terms'}
          onClose={() => setModalType(null)}
          onAccept={handleAcceptTerms}
          type="terms"
        />
        
        <RGPDModal
          isOpen={modalType === 'privacy'}
          onClose={() => setModalType(null)}
          onAccept={handleAcceptPrivacy}
          type="privacy"
        />

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
          .btn-primary:hover:not(:disabled) { 
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
