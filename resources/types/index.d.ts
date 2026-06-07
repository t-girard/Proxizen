import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface Dependent {
    id: number;
    name: string;
    age: number;
    color: string;
    join_code: string;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    dependent: Dependent;
    events: Event[];
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface Contact {
    id: number;
    dependent_id: number;
    prenom: string;
    nom: string;
    profession: string;
    categorie: string;
    phone: string;
    email: string;
    adresse: string;
}

export interface Event {
    id: number;
    dependent_id: number;
    titre: string;
    type: string;
    date: string;
    heureD: string;
    heureF: string;
    description: string;
}

export interface Document {
    nom: string;
    adresse: string;
    provenance: string;
    date: Date;
    categorie: string;
}

export interface PropsModal{
    showModal: boolean;
    modalType: "create" | "edit";
    contact?: Contact;
    onClose: () => void;
}

export interface PropsList{
    contacts: Contact[];
    documents: Documents[];
    onEdit: (contact: Contact)=> void;
    onEdit: (document: Document)=> void;
    auth: Auth;
}

export interface PropsSinglePage{
    contact: Contact;
}

export interface CalendarEvent {
  id: number;
  titre: string;
  type: string;
  date: string;
  heureD: string;
  heureF: string;
  description: string;
};

