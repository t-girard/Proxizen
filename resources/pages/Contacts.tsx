import React, { useState, useEffect } from 'react';
import { Contact, PropsList } from '../types';
import { useForm, router } from '@inertiajs/react';
import ProxizenLayout from '@/layouts/ProxizenLayout';

const avatarColors = [
  'from-red-400 to-pink-500',
  'from-blue-400 to-indigo-500',
  'from-green-400 to-emerald-500',
  'from-purple-400 to-fuchsia-500',
  'from-orange-400 to-amber-500',
  'from-teal-400 to-cyan-500',
  'from-yellow-400 to-orange-400',
  'from-pink-300 to-red-400',
  'from-indigo-400 to-purple-500',
  'from-lime-400 to-green-400',
  'from-cyan-400 to-blue-400',
  'from-fuchsia-400 to-pink-500',
  'from-rose-400 to-red-500',
  'from-emerald-400 to-teal-500',
  'from-violet-400 to-indigo-500',
  'from-amber-400 to-yellow-500',
];

function ContactSection({
  title,
  contacts,
  setContactToDelete,
  setDeleteModalOpen,
  getAvatarGradient,
  openContactModal,
}: {
  title: string;
  contacts: Contact[];
  setContactToDelete: (contact: Contact) => void;
  setDeleteModalOpen: (open: boolean) => void;
  getAvatarGradient: (prenom: string, nom: string) => string;
  openContactModal: (contact?: Contact) => void;
}) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <div key={contact.id} className="card bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 intervenant-card">
              <div className="flex justify-between items-start mb-4 w-full">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`w-14 h-14 bg-gradient-to-br ${getAvatarGradient(contact.prenom, contact.nom)} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                    {contact.prenom.charAt(0).toUpperCase()}{contact.nom.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{contact.prenom} {contact.nom}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contact.profession}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mt-3">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>{contact.phone}</span>
                </div>
              </div>



              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 min-h-[20px]">
                    <svg
                      className={`w-4 h-4 ${contact.email ? '' : 'invisible'}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                    </svg>

                    <span className={contact.email ? '' : 'invisible'}>
                      {contact.email || 'placeholder'}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 min-h-[20px]">
                    <svg
                      className={`w-4 h-4 ${contact.adresse ? '' : 'invisible'}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.134 2 5 5.134 5 9c0 4.418 7 13 7 13s7-8.582 7-13c0-3.866-3.134-7-7-7z"
                      />
                      <circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth={2} />
                    </svg>

                    <span className={contact.adresse ? '' : 'invisible'}>
                      {contact.adresse || 'placeholder'}
                    </span>
                  </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => openContactModal(contact)}
                  className="flex-1 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium transition"
                >
                  Modifier
                </button>
                <button
                  onClick={() => { setContactToDelete(contact); setDeleteModalOpen(true); }}
                  className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium transition"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700 dark:text-gray-300">Aucun contact trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default function Contacts({ contacts, auth }: PropsList) {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const { data, setData, post, put, errors, reset } = useForm({
    prenom: '',
    nom: '',
    profession: '',
    categorie: 'Famille',
    phone: '',
    email: '',
    adresse: '',
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();

    if (contactToEdit) {
      put(`/contacts/${contactToEdit.id}`, {
        preserveScroll: true,
        onSuccess: () => {
          closeContactModal();
          setNotification('Contact modifié avec succès');
        },
      });
    } else {
      post('/contacts', {
        preserveScroll: true,
        onSuccess: () => {
          closeContactModal();
          setNotification('Contact ajouté avec succès');
        },
      });
    }
  }

  function handleDelete(id: number) {
    router.delete(`/contacts/${id}`, {
      preserveScroll: true,
      onSuccess: () => {
        setDeleteModalOpen(false);
        setNotification('Contact supprimé');
      },
    });
  }

  const contactsFamille = contacts.filter(contact => contact.categorie === "Famille");
  const contactsMedic = contacts.filter(contact => contact.categorie === "Medical");
  const contactsAide = contacts.filter(contact => contact.categorie === "Aide");
  const contactsAutre = contacts.filter(contact => contact.categorie === "Autre");

  function getAvatarGradient(prenom: string, nom: string) {
    const str = prenom + nom;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return avatarColors[Math.abs(hash) % avatarColors.length];
  }

  const openContactModal = (contact?: Contact) => {
    if (contact) {
      setContactToEdit(contact);
      setData({
        prenom: contact.prenom,
        nom: contact.nom,
        profession: contact.profession,
        categorie: contact.categorie,
        phone: contact.phone,
        email: contact.email || '',
        adresse: contact.adresse || '',
      });
    } else {
      setContactToEdit(null);
      reset();
    }
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    setContactToEdit(null);
    reset();
  };

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/(\d{2})(?=\d)/g, '$1 ');
  }

  return (
    <ProxizenLayout title="Contacts">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Contacts</h2>
          <p className="text-gray-600 dark:text-gray-400">Contacts d'urgence et professionnels de santé</p>
        </div>
        <button onClick={() => openContactModal()} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition flex items-center gap-2 shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Ajouter un contact
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">⚠️ Numéros d'urgence</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-2xl text-white text-left">
            <div className="flex items-center justify-between mb-3 relative">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <span className="text-8xl font-bold absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-3">15</span>
            </div>
            <h4 className="font-bold text-lg mb-1">SAMU</h4>
            <p className="text-sm opacity-90">Urgences médicales</p>
          </div>

          <div className="card bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white text-left ">
            <div className="flex items-center justify-between mb-3 relative">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                </svg>
              </div>
              <span className="text-8xl font-bold absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-3">18</span>
            </div>
            <h4 className="font-bold text-lg mb-1">Pompiers</h4>
            <p className="text-sm opacity-90">Secours et incendies</p>
          </div>

          <div className="card bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white text-left">
            <div className="flex items-center justify-between mb-3 relative">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span className="text-8xl font-bold absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-3">17</span>
            </div>
            <h4 className="font-bold text-lg mb-1">Police</h4>
            <p className="text-sm opacity-90">Secours et sécurité</p>
          </div>
        </div>
      </div>

      <ContactSection
        title="👨‍👩‍👧 Famille"
        contacts={contactsFamille}
        setContactToDelete={setContactToDelete}
        setDeleteModalOpen={setDeleteModalOpen}
        getAvatarGradient={getAvatarGradient}
        openContactModal={openContactModal}
      />

      <ContactSection
        title="🩺 Professionnels de santé"
        contacts={contactsMedic}
        setContactToDelete={setContactToDelete}
        setDeleteModalOpen={setDeleteModalOpen}
        getAvatarGradient={getAvatarGradient}
        openContactModal={openContactModal}
      />

      <ContactSection
        title="🏠 Aide à domicile"
        contacts={contactsAide}
        setContactToDelete={setContactToDelete}
        setDeleteModalOpen={setDeleteModalOpen}
        getAvatarGradient={getAvatarGradient}
        openContactModal={openContactModal}
      />

      <ContactSection
        title="🌐 Autres"
        contacts={contactsAutre}
        setContactToDelete={setContactToDelete}
        setDeleteModalOpen={setDeleteModalOpen}
        getAvatarGradient={getAvatarGradient}
        openContactModal={openContactModal}
      />

      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={closeContactModal}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {contactToEdit ? 'Modifier le contact' : 'Ajouter un contact'}
              </h3>
              <button onClick={closeContactModal} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4" onSubmit={submit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Prénom</label>
                  <input type="text" value={data.prenom} onChange={e => setData('prenom', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Jean" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom</label>
                  <input type="text" value={data.nom} onChange={e => setData('nom', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Dupont" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profession</label>
                <input type="text" value={data.profession} onChange={e => setData('profession', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="Infirmier, Aide à domicile..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Catégorie</label>
                <select value={data.categorie} onChange={e => setData('categorie', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                  <option value="Famille">Famille</option>
                  <option value="Medical">Professionnel de santé </option>
                  <option value="Aide">Aide à domicile</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Téléphone</label>
                <input type="tel" value={data.phone} onChange={e => setData('phone', formatPhone(e.target.value))} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="06 12 34 56 78" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email (optionnel)</label>
                <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="email@exemple.fr" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Adresse (optionnel)</label>
                <input type="text" value={data.adresse} onChange={e => setData('adresse', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="12 rue de la Paix" />
              </div>

              <div className="flex gap-3 pt-4">
                <button type="button" onClick={closeContactModal} className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition">Annuler</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition">{contactToEdit ? 'Modifier' : 'Ajouter'}</button>
              </div>
              {errors.prenom && <p className="text-red-500">{errors.prenom}</p>}
              {errors.nom && <p className="text-red-500">{errors.nom}</p>}
              {errors.profession && <p className="text-red-500">{errors.profession}</p>}
              {errors.categorie && <p className="text-red-500">{errors.categorie}</p>}
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              {errors.adresse && <p className="text-red-500">{errors.adresse}</p>}
            </form>
          </div>
        </div>
      )}

      {deleteModalOpen && contactToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setDeleteModalOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Supprimer {contactToDelete.prenom} {contactToDelete.nom} ?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Cette action est irréversible.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteModalOpen(false)} className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition">Annuler</button>
              <button onClick={() => handleDelete(contactToDelete.id)} className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition">Supprimer</button>
            </div>
          </div>
        </div>
      )}

      {notification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} onClick={() => setNotification(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-sm w-full p-6 flex justify-between items-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-gray-800 dark:text-white">{notification}</p>
            <button onClick={() => setNotification(null)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">✕</button>
          </div>
        </div>
      )}
    </ProxizenLayout>
  );
}
