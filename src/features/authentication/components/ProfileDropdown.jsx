import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { PowerIcon } from '@heroicons/react/20/solid'
import { logout } from '../slices/authSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// import { Link } from 'react-router';




const ProfileDropdown = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div className='relative'>
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    {user.email}
                    <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="z-50 w-52 origin-top-right rounded-xl border border-white/50 mt-2 bg-black/60 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    {/* <MenuItem>
                        <Link to={'/profile'} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/50">
                            <UserIcon className="size-4 fill-white/30" />
                            Profile
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘P</kbd>
                        </Link>
                    </MenuItem> */}
                    <div className="my-1 h-px bg-white/5" />
                    <MenuItem>
                        <button onClick={handleLogout} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/50">
                            <PowerIcon className="size-4 fill-white/30" />
                            Logout
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘L</kbd>
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    )
}

export default ProfileDropdown