import { Head } from '@inertiajs/react';
import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';
import ProxizenLayout from '@/layouts/ProxizenLayout';
import SettingsLayout from '@/layouts/settings/layout';
import { edit as editAppearance } from '@/routes/appearance';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Paramètres d’apparence',
        href: editAppearance().url,
    },
];

export default function Appearance() {
    return (
        <ProxizenLayout title="Paramètres">
            <Head title="Paramètres" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Paramètres d’apparence"
                        description="Modifiez les paramètres d’apparence de votre compte"
                    />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </ProxizenLayout>
    );
}
