import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { router } from '@inertiajs/react';

interface Profile {
    id: number;
    name: string;
    age: number;
    initials: string;
    color: string;
    role: string;
}

interface ProfilsProps {
    profiles: Profile[];
}

type ColorGradient = 'blue' | 'purple' | 'green' | 'red' | 'orange';

export default function Profils({ profiles }: ProfilsProps) {

    const [joinCode, setJoinCode] = useState('');

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingProfile, setEditingProfile] = useState<Profile | null>(null);

    const [newProfileName, setNewProfileName] = useState('');
    const [newProfileAge, setNewProfileAge] = useState('');
    const [newProfileColor, setNewProfileColor] = useState<ColorGradient>('blue');

    const colorGradients: Record<ColorGradient, string> = {
        blue: 'from-blue-400 to-blue-600',
        purple: 'from-purple-400 to-purple-600',
        green: 'from-green-400 to-green-600',
        red: 'from-red-400 to-red-600',
        orange: 'from-orange-400 to-orange-600',
    };

    const hoverColors: Record<ColorGradient, string> = {
        blue: 'hover:border-blue-500 dark:hover:border-blue-400',
        purple: 'hover:border-purple-500 dark:hover:border-purple-400',
        green: 'hover:border-green-500 dark:hover:border-green-400',
        red: 'hover:border-red-500 dark:hover:border-red-400',
        orange: 'hover:border-orange-500 dark:hover:border-orange-400',
    };

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    const openAddModal = () => {
        if (profiles.length >= 5) {
            alert('Vous avez atteint le maximum de 5 profils');
            return;
        }
        setNewProfileName('');
        setNewProfileAge('');
        setNewProfileColor('blue');
        setShowAddModal(true);
    };

    const closeAddModal = () => {
        setShowAddModal(false);
    };

    const addProfile = () => {
        if (!newProfileName || !newProfileAge) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        router.post('/dependants', {
        name: newProfileName,
        age: Number(newProfileAge),
        color: newProfileColor,
        }, {
            onSuccess: () => {
                closeAddModal();
            }
        });
    };

    const openEditModal = (profile: Profile) => {
        setEditingProfile(profile);
        setNewProfileName(profile.name);
        setNewProfileAge(profile.age.toString());
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setEditingProfile(null);
    };

    const saveEdit = () => {
        if (!editingProfile) return;

        if (!newProfileName || !newProfileAge) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        router.put(`/dependents/${editingProfile.id}`, {
            name: newProfileName,
            age: Number(newProfileAge),
        }, {
            preserveScroll: true,
            onSuccess: () => {
                alert('Profil modifié avec succès !');
                closeEditModal();
            },
            onError: (errors) => {
                console.error(errors);
                alert('Une erreur est survenue lors de la modification.');
            },
        });
    };

    function confirmDelete(profile : Profile) {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce profil ?')) return;

    router.delete(`/dependents/${profile.id}`, {
        preserveScroll: true,
        onSuccess: () => {
            alert('Profil supprimé !');
        },
        onError: (errors) => {
            console.error(errors);
            alert('Une erreur est survenue lors de la suppression.');
        },
    });
}

    return (
        <>
            <Head title="Sélection du profil" />

            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center p-6">
                
                <div className="absolute top-6 right-6">
                    <button
                        onClick={toggleDarkMode}
                        className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 shadow-lg transition"
                    >
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </div>

                <div className="w-full max-w-6xl">
                    
                    <div className="text-center mb-12">
                        <img
                            src="/images/logo_proxizen.png"
                            alt="Proxizen"
                            className="w-20 h-20 rounded-2xl mx-auto mb-4 shadow-xl"
                        />
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                            Qui souhaitez-vous accompagner ?
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Sélectionnez le profil de la personne aidée
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                        
                        {profiles.map((profile) => (
                            <div
                                key={profile.id}
                                onClick={() => router.post(`/dependents/${profile.id}/select`)}
                                className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 cursor-pointer border-2 border-transparent ${hoverColors[profile.color as ColorGradient]} transition hover:-translate-y-2 hover:shadow-2xl`}
                            >
                                <div className="text-center">
                                    <div className={`w-24 h-24 bg-gradient-to-br ${colorGradients[profile.color as ColorGradient]} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition hover:scale-110`}>
                                        <span className="text-3xl font-bold text-white">{profile.initials}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                        {profile.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{profile.age} ans</p>
                                    <span
                                        className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                                            profile.role === 'primary'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}
                                    >
                                        {profile.role === 'primary'
                                            ? 'Aidant principal'
                                            : 'Aidant secondaire'}
                                    </span>

                                </div>
                                <div className="flex gap-2 mt-4">
                                    {profile.role === 'primary' && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openEditModal(profile);
                                            }}
                                            className="flex-1 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm transition"
                                        >
                                            Modifier
                                        </button>
                                    )}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            confirmDelete(profile);
                                        }}
                                        className="py-2 px-3 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg text-sm transition"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}

                        {profiles.length < 5 && (
                            <div
                                onClick={openAddModal}
                                className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-500 hover:border-blue-500 dark:hover:border-blue-400 transition hover:-translate-y-2"
                            >
                                <div className="text-center h-full flex flex-col items-center justify-center">
                                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <svg className="w-12 h-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                        Ajouter un profil
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Maximum 5 profils</p>
                                </div>
                            </div>
                        )}

                    </div>

                    <div className="text-center">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                router.post('/logout');
                            }}
                            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Se déconnecter
                        </button>
                    </div>

                </div>

                {showAddModal && (
                    <div
                        onClick={closeAddModal}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                Ajouter un profil
                            </h3>

                            <div className="space-y-4">
                                {/* Nom */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        value={newProfileName}
                                        onChange={(e) => setNewProfileName(e.target.value)}
                                        placeholder="ex: Jean Dupont"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Âge */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Âge
                                    </label>
                                    <input
                                        type="number"
                                        value={newProfileAge}
                                        onChange={(e) => setNewProfileAge(e.target.value)}
                                        placeholder="ex: 84"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Couleur */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Couleur de l'avatar
                                    </label>
                                    <div className="flex gap-2">
                                        {(['blue', 'purple', 'green', 'red', 'orange'] as ColorGradient[]).map((color) => (
                                            <button
                                                key={color}
                                                type="button"
                                                onClick={() => setNewProfileColor(color)}
                                                className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorGradients[color]} hover:scale-110 transition ${
                                                    newProfileColor === color ? 'ring-4 ring-offset-2 ring-gray-400' : ''
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={addProfile}
                                    className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
                                >
                                    Créer un profil
                                </button>

                                {/* Séparateur */}
                                <div className="relative py-2">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-white dark:bg-gray-800 px-3 text-sm text-gray-500">
                                            ou
                                        </span>
                                    </div>
                                </div>

                                {/* Join code */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Code de liaison
                                    </label>
                                    <input
                                        type="text"
                                        value={joinCode}
                                        onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                                        placeholder="EX: A9F3K2"
                                        className="w-full px-4 py-2 text-center tracking-widest uppercase font-mono border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Entrez un code pour rejoindre un profil existant en tant qu’aidant(e) secondaire
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        if (!joinCode) {
                                            alert('Veuillez entrer un code de liaison');
                                            return;
                                        }

                                        router.post('/dependents/join', {
                                            join_code: joinCode,
                                        }, {
                                            onSuccess: () => {
                                                setJoinCode('');
                                                closeAddModal();
                                            },
                                        });
                                    }}
                                    className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition"
                                >
                                    Rejoindre avec un code
                                </button>

                                <button
                                    onClick={closeAddModal}
                                    className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-medium transition"
                                >
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showEditModal && (
                    <div
                        onClick={closeEditModal}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                Modifier le profil
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        value={newProfileName}
                                        onChange={(e) => setNewProfileName(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Âge
                                    </label>
                                    <input
                                        type="number"
                                        value={newProfileAge}
                                        onChange={(e) => setNewProfileAge(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={closeEditModal}
                                    className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-medium transition"
                                >
                                    Annuler
                                </button>
                                <button
                                    onClick={saveEdit}
                                    className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}
