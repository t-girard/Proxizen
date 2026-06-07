import { useState, useEffect, useRef } from 'react';

interface RGPDModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAccept: () => void;
    type: 'terms' | 'privacy';
}

export default function RGPDModal({ isOpen, onClose, onAccept, type }: RGPDModalProps) {
    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setHasScrolledToBottom(false);
        }
    }, [isOpen]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const isAtBottom = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 10;
        
        if (isAtBottom && !hasScrolledToBottom) {
            setHasScrolledToBottom(true);
        }
    };

    if (!isOpen) return null;

    const content = type === 'terms' ? termsContent : privacyContent;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] flex flex-col border border-gray-200 dark:border-gray-700">
                
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {type === 'terms' ? 'Conditions Générales d\'Utilisation' : 'Politique de Confidentialité'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div 
                    ref={contentRef}
                    onScroll={handleScroll}
                    className="flex-1 overflow-y-auto p-6 prose dark:prose-invert max-w-none"
                >
                    {content}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                    {!hasScrolledToBottom && (
                        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                Veuillez faire défiler jusqu'en bas pour lire l'intégralité du document
                            </p>
                        </div>
                    )}
                    
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition"
                        >
                            Annuler
                        </button>
                        <button
                            onClick={onAccept}
                            disabled={!hasScrolledToBottom}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            J'ai lu et j'accepte
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const termsContent = (
    <div className="text-gray-700 dark:text-gray-300 space-y-6">
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <strong>Date d'entrée en vigueur :</strong> 21 janvier 2026
            </p>
        </div>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Objet</h3>
            <p>
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme Proxizen, 
                un service d'assistance aux aidants familiaux de personnes âgées dépendantes. En créant un compte sur Proxizen, 
                vous acceptez sans réserve les présentes CGU.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Définitions</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Utilisateur</strong> : Toute personne créant un compte sur Proxizen</li>
                <li><strong>Aidant</strong> : Personne qui accompagne une personne âgée dépendante</li>
                <li><strong>Dépendant</strong> : Personne âgée bénéficiant de l'aide d'un aidant</li>
                <li><strong>Plateforme</strong> : L'ensemble des services proposés par Proxizen</li>
            </ul>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Accès et inscription</h3>
            <p className="mb-3">
                <strong>3.1 Conditions d'accès</strong> : La plateforme est accessible à toute personne majeure disposant 
                d'une connexion Internet. L'accès est gratuit pour les fonctionnalités de base.
            </p>
            <p className="mb-3">
                <strong>3.2 Création de compte</strong> : Pour utiliser Proxizen, vous devez créer un compte en fournissant :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Votre nom complet</li>
                <li>Une adresse email valide</li>
                <li>Un mot de passe sécurisé (minimum 12 caractères, majuscules, minuscules, chiffres)</li>
            </ul>
            <p className="mt-3">
                <strong>3.3 Exactitude des informations</strong> : Vous vous engagez à fournir des informations exactes 
                et à les maintenir à jour. Toute information fausse ou trompeuse peut entraîner la suspension de votre compte.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Services proposés</h3>
            <p className="mb-3">Proxizen propose les services suivants :</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Gestion de calendrier</strong> : Planification et suivi des rendez-vous médicaux, interventions à domicile</li>
                <li><strong>Carnet de contacts</strong> : Centralisation des coordonnées des professionnels de santé</li>
                <li><strong>Gestion documentaire</strong> : Stockage sécurisé des documents médicaux et administratifs</li>
                <li><strong>Rappels et notifications</strong> : Alertes pour les rendez-vous et prises de médicaments</li>
                <li><strong>Suivi de profil</strong> : Gestion des informations relatives au dépendant</li>
            </ul>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Obligations de l'utilisateur</h3>
            <p className="mb-3">En utilisant Proxizen, vous vous engagez à :</p>
            <ul className="list-disc list-inside space-y-2">
                <li>Ne pas utiliser la plateforme à des fins illégales ou malveillantes</li>
                <li>Respecter la confidentialité des données des personnes dépendantes</li>
                <li>Ne pas partager vos identifiants de connexion</li>
                <li>Signaler tout dysfonctionnement ou faille de sécurité</li>
                <li>Ne pas tenter d'accéder aux données d'autres utilisateurs</li>
                <li>Utiliser la plateforme conformément à sa finalité d'assistance aux aidants</li>
            </ul>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Propriété intellectuelle</h3>
            <p>
                Tous les éléments de la plateforme Proxizen (logo, charte graphique, code source, contenus) sont 
                protégés par le droit d'auteur et appartiennent à l'équipe Proxizen. Toute reproduction, représentation, 
                modification ou exploitation non autorisée est strictement interdite.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Limitation de responsabilité</h3>
            <p className="mb-3">
                <strong>7.1</strong> Proxizen est un outil d'assistance et ne se substitue en aucun cas à un avis médical professionnel. 
                Les informations fournies sont à titre indicatif.
            </p>
            <p className="mb-3">
                <strong>7.2</strong> Proxizen ne peut être tenu responsable :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Des interruptions de service dues à des causes techniques</li>
                <li>De la perte de données en cas de défaillance technique</li>
                <li>Des conséquences d'une utilisation inappropriée de la plateforme</li>
                <li>Des décisions médicales prises sur la base des informations stockées</li>
            </ul>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">8. Durée et résiliation</h3>
            <p className="mb-3">
                <strong>8.1 Durée</strong> : Le contrat est conclu pour une durée indéterminée à compter de la création du compte.
            </p>
            <p className="mb-3">
                <strong>8.2 Résiliation par l'utilisateur</strong> : Vous pouvez supprimer votre compte à tout moment 
                depuis les paramètres de votre profil.
            </p>
            <p>
                <strong>8.3 Résiliation par Proxizen</strong> : Nous nous réservons le droit de suspendre ou supprimer 
                tout compte en cas de violation des présentes CGU.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">9. Modification des CGU</h3>
            <p>
                Proxizen se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en 
                vigueur dès leur publication sur la plateforme. Votre utilisation continue de Proxizen après modification 
                vaut acceptation des nouvelles CGU.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">10. Droit applicable et juridiction</h3>
            <p>
                Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront 
                seuls compétents.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">11. Contact</h3>
            <p>
                Pour toute question relative aux présentes CGU, vous pouvez nous contacter à :<br />
                <strong>Email :</strong> support@proxizen.fr<br />
                <strong>Adresse :</strong> Proxizen, IUT2 Grenoble, Place Doyen Gosse, 38000 Grenoble
            </p>
        </section>
    </div>
);

const privacyContent = (
    <div className="text-gray-700 dark:text-gray-300 space-y-6">
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <strong>Date d'entrée en vigueur :</strong> 21 janvier 2026<br />
                <strong>Conformité :</strong> Règlement Général sur la Protection des Données (RGPD - UE 2016/679)
            </p>
        </div>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Responsable du traitement</h3>
            <p>
                Le responsable du traitement des données personnelles est :<br />
                <strong>Proxizen</strong><br />
                IUT2 Grenoble, Place Doyen Gosse, 38000 Grenoble<br />
                Email : dpo@proxizen.fr
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Données collectées</h3>
            <p className="mb-3">Nous collectons les données suivantes :</p>
            
            <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2.1 Données d'identification</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Mot de passe (chiffré)</li>
                </ul>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2.2 Données relatives au dépendant</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nom, prénom, âge</li>
                    <li>Informations médicales (si renseignées)</li>
                    <li>Coordonnées des professionnels de santé</li>
                </ul>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2.3 Données techniques</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et appareil</li>
                    <li>Données de connexion (date, heure)</li>
                    <li>Cookies (avec votre consentement)</li>
                </ul>
            </div>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Finalités du traitement</h3>
            <p className="mb-3">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Gestion de votre compte</strong> : création, authentification, gestion du profil</li>
                <li><strong>Fourniture des services</strong> : calendrier, contacts, documents, rappels</li>
                <li><strong>Amélioration de la plateforme</strong> : statistiques anonymisées, correction de bugs</li>
                <li><strong>Communication</strong> : notifications importantes, support utilisateur</li>
                <li><strong>Sécurité</strong> : prévention des fraudes, protection des données</li>
            </ul>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Base légale du traitement</h3>
            <p className="mb-3">Le traitement de vos données repose sur :</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Votre consentement</strong> (article 6.1.a du RGPD) : pour les cookies non essentiels et certaines fonctionnalités</li>
                <li><strong>L'exécution du contrat</strong> (article 6.1.b du RGPD) : pour la fourniture des services</li>
                <li><strong>Nos intérêts légitimes</strong> (article 6.1.f du RGPD) : pour la sécurité et l'amélioration de la plateforme</li>
            </ul>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Destinataires des données</h3>
            <p className="mb-3">Vos données peuvent être transmises à :</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Personnel autorisé de Proxizen</strong> : uniquement pour la gestion technique et le support</li>
                <li><strong>Prestataires techniques</strong> : hébergement (OVH, France), envoi d'emails (EmailJS)</li>
                <li><strong>Autorités légales</strong> : en cas de réquisition judiciaire</li>
            </ul>
            <p className="mt-3">
                <strong>Nous ne vendons ni ne louons jamais vos données personnelles à des tiers.</strong>
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Durée de conservation</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Données de compte</strong> : conservées tant que votre compte est actif</li>
                <li><strong>Après suppression du compte</strong> : données supprimées sous 30 jours (sauf obligations légales)</li>
                <li><strong>Logs de connexion</strong> : conservés 1 an pour des raisons de sécurité</li>
                <li><strong>Documents médicaux</strong> : conservés selon votre demande, supprimés à la fermeture du compte</li>
            </ul>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Vos droits (RGPD)</h3>
            <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
            
            <div className="space-y-3">
                <div>
                    <strong className="text-gray-900 dark:text-white">7.1 Droit d'accès</strong> (article 15) : 
                    Obtenir une copie de vos données personnelles
                </div>
                <div>
                    <strong className="text-gray-900 dark:text-white">7.2 Droit de rectification</strong> (article 16) : 
                    Corriger des données inexactes ou incomplètes
                </div>
                <div>
                    <strong className="text-gray-900 dark:text-white">7.3 Droit à l'effacement</strong> (article 17) : 
                    Supprimer vos données ("droit à l'oubli")
                </div>
                <div>
                    <strong className="text-gray-900 dark:text-white">7.4 Droit à la limitation</strong> (article 18) : 
                    Restreindre le traitement de vos données
                </div>
                <div>
                    <strong className="text-gray-900 dark:text-white">7.5 Droit à la portabilité</strong> (article 20) : 
                    Récupérer vos données dans un format structuré
                </div>
                <div>
                    <strong className="text-gray-900 dark:text-white">7.6 Droit d'opposition</strong> (article 21) : 
                    S'opposer au traitement de vos données
                </div>
                <div>
                    <strong className="text-gray-900 dark:text-white">7.7 Droit de retirer votre consentement</strong> : 
                    À tout moment, sans affecter la licéité du traitement antérieur
                </div>
            </div>

            <p className="mt-4">
                Pour exercer vos droits, contactez-nous à : <strong>dpo@proxizen.fr</strong>
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">8. Sécurité des données</h3>
            <p className="mb-3">Nous mettons en œuvre les mesures suivantes :</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Chiffrement</strong> : HTTPS/TLS pour toutes les communications</li>
                <li><strong>Mots de passe</strong> : hashés avec bcrypt</li>
                <li><strong>Hébergement</strong> : serveurs sécurisés en France (conformité RGPD)</li>
                <li><strong>Accès restreint</strong> : seul le personnel autorisé accède aux données</li>
                <li><strong>Sauvegardes</strong> : quotidiennes et chiffrées</li>
                <li><strong>Surveillance</strong> : détection des accès non autorisés</li>
            </ul>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">9. Cookies</h3>
            <p className="mb-3">Nous utilisons les cookies suivants :</p>
            
            <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">9.1 Cookies essentiels</h4>
                <p>Nécessaires au fonctionnement de la plateforme (session, authentification). Vous ne pouvez pas les refuser.</p>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">9.2 Cookies de préférences</h4>
                <p>Sauvegardent vos choix (langue, mode sombre). Avec votre consentement.</p>
            </div>

            <p className="mt-3">
                Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">10. Transferts internationaux</h3>
            <p>
                Vos données sont hébergées en France. Certains sous-traitants (ex: EmailJS) peuvent être situés hors UE. 
                Dans ce cas, des garanties appropriées sont mises en place (clauses contractuelles types de la Commission européenne).
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">11. Données sensibles</h3>
            <p>
                Les données de santé sont considérées comme sensibles (article 9 du RGPD). Nous ne collectons que les 
                informations strictement nécessaires et avec votre consentement explicite. Elles sont stockées de manière 
                sécurisée et ne sont jamais partagées sans votre autorisation.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">12. Mineurs</h3>
            <p>
                Proxizen est destiné aux personnes majeures (18 ans et plus). Si vous avez moins de 18 ans, vous devez 
                obtenir l'autorisation de vos parents ou tuteurs légaux avant de créer un compte.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">13. Réclamation</h3>
            <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de 
                la Commission Nationale de l'Informatique et des Libertés (CNIL) :<br />
                <strong>CNIL</strong><br />
                3 Place de Fontenoy - TSA 80715<br />
                75334 PARIS CEDEX 07<br />
                Tél : 01 53 73 22 22<br />
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">www.cnil.fr</a>
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">14. Modification de la politique</h3>
            <p>
                Nous pouvons modifier cette politique de confidentialité. Les modifications importantes vous seront notifiées 
                par email. La version actuelle est toujours disponible sur notre site.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">15. Contact</h3>
            <p>
                Pour toute question sur cette politique ou pour exercer vos droits :<br />
                <strong>Délégué à la Protection des Données (DPO)</strong><br />
                Email : dpo@proxizen.fr<br />
                Adresse : Proxizen, IUT2 Grenoble, Place Doyen Gosse, 38000 Grenoble
            </p>
        </section>
    </div>
);
