import { Button, Field, Fieldset, Input, Label } from '@headlessui/react'
import { PencilIcon, XMarkIcon } from '@heroicons/react/20/solid'
import React, { Suspense, useEffect, useState } from 'react'

import clsx from 'clsx';
import { useSelector } from 'react-redux';
import useUpdateProfile from '../hooks/useUpdateProfile';

const ProfileForm = () => {
    const { profile } = useSelector((state) => state.profile);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [editProfile, setEditProfile] = useState(false);
    const { handleUpdateProfile } = useUpdateProfile();
    useEffect(() => {
        if (profile) {
            setFirstName(profile.firstName);
            setMiddleName(profile.middleName);
            setLastName(profile.lastName);
        }
    }, [profile]);

    const updateProfile = async (e) => {
        e.preventDefault();

        await handleUpdateProfile({ firstName, middleName, lastName });
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="fade-up bg-white p-4 rounded-lg">
                <div className="px-4 sm:px-0">
                    <h1 className="text-lg/7 font-semibold text-gray-900">Profile</h1>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <div className="mt-4">
                        <form onSubmit={updateProfile}>
                            <Fieldset>
                                <div className="space-y-4">
                                    <Field>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor='firstname'>First Name</Label>
                                        <Input
                                            className="rounded-md shadow-md shadow-violet-200 block mt-1 w-full py-2 px-3"
                                            id="firstname"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            disabled={!editProfile}
                                            placeholder='First Name'
                                        />
                                    </Field>
                                    <Field>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor='middlename'>Middle Name</Label>
                                        <Input
                                            className="rounded-md shadow-md shadow-violet-200 block mt-1 w-full py-2 px-3"
                                            id="middlename"
                                            value={middleName}
                                            onChange={(e) => setMiddleName(e.target.value)}
                                            disabled={!editProfile}
                                            placeholder='Middle Name'
                                        />
                                    </Field>
                                    <Field>
                                        <Label className="block text-sm font-medium text-gray-700" htmlFor='lastname'>Last Name</Label>
                                        <Input
                                            className="rounded-md shadow-md shadow-violet-200 block mt-1 w-full py-2 px-3"
                                            id="lastname"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            disabled={!editProfile}
                                            placeholder='Last Name'
                                        />
                                    </Field>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <Button
                                            type='button'
                                            className={clsx(
                                                'text-violet-800 px-2 py-2 border rounded-md border-violet-800 hover:bg-violet-800  hover:text-white',

                                            )}
                                            onClick={() => setEditProfile(!editProfile)}>
                                            {editProfile ?
                                                <XMarkIcon className="h-4 w-4" />
                                                :
                                                <PencilIcon className="h-4 w-4" />
                                            }
                                        </Button>
                                        <Button
                                            type='submit'
                                            className="bg-violet-800 hover:bg-violet-600 text-white px-2 py-1 rounded-md"
                                            hidden={!editProfile}
                                        >
                                            Update
                                        </Button>
                                    </div>
                                </div>
                            </Fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default ProfileForm