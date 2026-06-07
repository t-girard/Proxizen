import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, Search, FileText, Pill, Shield, Upload, X, Trash2
} from 'lucide-react';
import { Document, PropsList } from '../types';
import { useForm, router } from '@inertiajs/react';
import ProxizenLayout from '@/layouts/ProxizenLayout';

export default function Documents({ documents, auth }: PropsList) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [documentToDelete, setDocumentToDelete] = useState<Document | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data, setData, post, processing, errors, reset } = useForm({
    nom: '',
    categorie: 'medical',
    provenance: '',
    file: null as File | null,
  });

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/documents', {
      forceFormData: true,
      onSuccess: () => {
        setIsModalOpen(false);
        reset();
        setNotification('Document ajouté avec succès');
      },
    });
  };

  const handleDelete = () => {
    if (documentToDelete) {
      router.delete(`/documents/${documentToDelete.nom}`, {
        preserveScroll: true,
        onSuccess: () => {
          setDeleteModalOpen(false);
          setDocumentToDelete(null);
          setNotification('Document supprimé');
        },
      });
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesFilter = activeFilter === 'all' || doc.categorie === activeFilter;
    const matchesSearch = doc.nom.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.provenance.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <ProxizenLayout title="Documents">
      {/* En-tête de page aligné sur Contacts.tsx */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Documents</h2>
          <p className="text-gray-600 dark:text-gray-400">Gérez vos documents médicaux et administratifs</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition flex items-center gap-2 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Ajouter un document
        </button>
      </div>

      {/* Barre de Recherche */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Rechercher par nom ou provenance..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white shadow-sm"
        />
      </div>

      {/* Filtres par catégorie */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        {['all', 'medical', 'ordonnance', 'administratif'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeFilter === filter 
              ? 'bg-blue-500 text-white shadow-md' 
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50'
            }`}
          >
            {filter === 'all' ? 'Tous' : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Liste des Documents */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        {filteredDocuments.length > 0 ? filteredDocuments.map((doc, index) => (
          <div key={doc.id} className={`p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${index !== filteredDocuments.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${doc.categorie === 'medical' ? 'bg-red-100' : doc.categorie === 'ordonnance' ? 'bg-orange-100' : 'bg-blue-100'}`}>
                {doc.categorie === 'medical' ? <FileText className="text-red-600 w-6 h-6" /> : doc.categorie === 'ordonnance' ? <Pill className="text-orange-600 w-6 h-6" /> : <Shield className="text-blue-600 w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{doc.nom}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{doc.provenance} • {doc.Date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase hidden sm:inline-block ${doc.categorie === 'medical' ? 'bg-red-100 text-red-700' : doc.categorie === 'ordonnance' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                {doc.categorie}
              </span>
              <a 
                href={`/storage/${doc.adresse}`} 
                download={doc.nom}
                className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition" 
                title="Télécharger"
              >
                <Upload className="w-5 h-5 rotate-180" />
              </a>
              <button onClick={() => { setDocumentToDelete(doc); setDeleteModalOpen(true); }} className="p-2 text-gray-400 hover:text-red-600 rounded-lg transition">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        )) : (
          <div className="p-12 text-center text-gray-500 dark:text-gray-400">Aucun document trouvé.</div>
        )}
      </div>

      {/* Modal Ajout Document (Style identique à Contacts.tsx) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={() => setIsModalOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Ajouter un document</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Titre</label>
                <input type="text" value={data.nom} onChange={e => setData('nom', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Analyse de sang..." required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Provenance</label>
                <input type="text" value={data.provenance} onChange={e => setData('provenance', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Dr. Martin" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Catégorie</label>
                <select value={data.categorie} onChange={e => setData('categorie', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                  <option value="medical">Médical</option>
                  <option value="ordonnance">Ordonnance</option>
                  <option value="administratif">Administratif</option>
                </select>
              </div>
              <div 
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50" 
                onClick={() => fileInputRef.current?.click()}
              >
                <input ref={fileInputRef} type="file" className="hidden" onChange={e => setData('file', e.target.files ? e.target.files[0] : null)} />
                <Upload className="mx-auto w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">{data.file ? data.file.name : "Cliquez pour choisir un fichier"}</p>
                {errors.file && (
                  <p className="text-red-500 text-xs mt-2 font-medium">
                    {errors.file.includes('validation.mimes') ? "Format invalide" : errors.file}
                  </p>
                )}
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition">Annuler</button>
                <button type="submit" disabled={processing} className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition disabled:opacity-50">
                  {processing ? 'Envoi...' : 'Ajouter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Suppression Document */}
      {deleteModalOpen && documentToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setDeleteModalOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-sm w-full p-6" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Supprimer "{documentToDelete.nom}" ?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Cette action est irréversible.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteModalOpen(false)} className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition">Annuler</button>
              <button onClick={handleDelete} className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition">Supprimer</button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {notification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} onClick={() => setNotification(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-sm w-full p-6 flex justify-between items-center">
            <p className="text-gray-800 dark:text-white font-medium">{notification}</p>
            <button onClick={() => setNotification(null)} className="text-gray-500 dark:hover:text-gray-700 text-xl">✕</button>
          </div>
        </div>
      )}
    </ProxizenLayout>
  );
}