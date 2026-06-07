import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController';
import InputError from '@/components/input-error';
import ProxizenLayout from '@/layouts/ProxizenLayout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';
import { Transition } from '@headlessui/react';
import { Form, Head } from '@inertiajs/react';
import { useRef } from 'react';

import HeadingSmall from '@/components/heading-small';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { edit } from '@/routes/user-password';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Paramètres du mot de passe',
        href: edit().url,
    },
];

export default function Password() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    return (
        <ProxizenLayout title="Paramètres">
            <Head title="Paramètres" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Mettre à jour le mot de passe"
                        description="Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester sécurisé"
                    />

                    <Form
                        {...PasswordController.update.form()}
                        options={{
                            preserveScroll: true,
                        }}
                        resetOnError={[
                            'password',
                            'password_confirmation',
                            'current_password',
                        ]}
                        resetOnSuccess
                        onError={(errors) => {
                            if (errors.password) {
                                passwordInput.current?.focus();
                            }

                            if (errors.current_password) {
                                currentPasswordInput.current?.focus();
                            }
                        }}
                        className="space-y-6"
                    >
                        {({ errors, processing, recentlySuccessful }) => (
                            <>
                                <div className="grid gap-2">
                                    <Label htmlFor="current_password">
                                        Mot de passe actuel
                                    </Label>

                                    <Input
                                        id="current_password"
                                        ref={currentPasswordInput}
                                        name="current_password"
                                        type="password"
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        placeholder="Mot de passe actuel"
                                    />

                                    <InputError
                                        message={errors.current_password}
                                    />
                                </div>

                                <div className="grid gap-2 mb-2">
                                    <Label htmlFor="password">
                                        Nouveau mot de passe
                                    </Label>

                                    <Input
                                        id="password"
                                        ref={passwordInput}
                                        name="password"
                                        type="password"
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        placeholder="Nouveau mot de passe"
                                    />

                                    <InputError message={errors.password} />
                                </div>

                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    <li>Minimum 12 caractères</li>
                                    <li>Au moins 1 majuscule et 1 minuscule</li>
                                    <li>Au moins 1 chiffre</li>
                                </ul>

                                <div className="grid gap-2">
                                    <Label htmlFor="password_confirmation">
                                        Confirmer le mot de passe
                                    </Label>

                                    <Input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        placeholder="Confirmer le mot de passe"
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <Button
                                        disabled={processing}
                                        data-test="update-password-button"
                                    >
                                        Enregistrer le mot de passe
                                    </Button>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-neutral-600">
                                            Enregistré
                                        </p>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </SettingsLayout>
        </ProxizenLayout>
    );
}
