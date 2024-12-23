import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import React from 'react'
import { logout } from '../slices/authSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const MobileProfileDropdown = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Disclosure as="div" className="pt-2" defaultOpen={false}>
            {({ open }) => (
                <>
                    <DisclosureButton to={'/profile'} className="group flex w-full items-center justify-between text-lg font-bold">
                        {user.email}
                        {open ? (
                            <ChevronUpIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                        ) : (
                            <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                        )}
                    </DisclosureButton>
                    <DisclosurePanel className="size-10 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180">
                        <div className="py-1">
                            {/* <DisclosureButton as={Link} to="/profile" className="block text-lg font-bold">
                                Profile
                            </DisclosureButton> */}
                            <DisclosureButton as="button" onClick={handleLogout} className="block text-lg font-bold">
                                Logout
                            </DisclosureButton>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}

export default MobileProfileDropdown