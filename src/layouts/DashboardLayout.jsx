import {
    ArrowRightCircleIcon,
    Bars4Icon,
    BriefcaseIcon,
    ChevronDownIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon
} from "@heroicons/react/20/solid";
import { Link, Outlet } from "react-router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../features/authentication";
import { useState } from "react";

const navigation = [
    { name: "Dashboard", icon: HomeIcon, href: "/employer/dashboard", current: true },
    { name: "Jobs", icon: BriefcaseIcon, href: "/employer/jobs", current: false },
    { name: "Applications", icon: UsersIcon, href: "/employer/applications", current: false },
];

function DashboardLayout() {
    const isAuthenticated = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const handleLogout = () => {
        dispatch(logout());
    };
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const currentPath = navigation.find((item) => item.href === window.location.pathname) || navigation[0]
    const [current, setCurrent] = useState(currentPath);

    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } fixed inset-0 z-40 flex-shrink-0 w-64 bg-black border-r border-gray-200 transition-transform duration-300 md:relative md:translate-x-0`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between px-4 h-16 bg-black text-white">
                        <span className="text-xl font-bold">Employer</span>
                        <button
                            className="md:hidden"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="mt-5 flex-1 px-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`flex items-center p-2 rounded-lg ${current.href === item.href
                                    ? 'bg-gray-500 text-white'
                                    : 'text-white hover:bg-gray-300 hover:text-gray-950'
                                    }`}
                                onClick={() => setCurrent(item)}
                            >
                                <item.icon className="h-6 w-6 mr-3" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <div className="z-10 h-16 bg-black text-white shadow-md flex items-center justify-between px-4">
                    <button
                        className="md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Bars4Icon className="h-6 w-6 " />
                    </button>
                    <span className="text-lg font-semibold">{current.name}</span>
                    <div className="flex items-center space-x-4">
                        <div className="hidden lg:flex items-center justify-end space-x-4">
                            {isAuthenticated &&
                                <div className="capitalize relative">
                                    <Menu>
                                        <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white  focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-800 data-[focus]:outline-1 data-[focus]:outline-white">
                                            {user.email}
                                            <ChevronDownIcon className="size-4 fill-white/80" />
                                        </MenuButton>

                                        <MenuItems
                                            transition
                                            anchor="bottom end"
                                            className="w-52 origin-top-right mt-2 rounded-xl bg-black border border-white/5  p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                                        >
                                            {/* <MenuItem>
                                                <Link
                                                    to={`/employer/profile`}
                                                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/30"
                                                >
                                                    <UserIcon className="size-4 fill-white/30" />
                                                    Profile
                                                </Link>
                                            </MenuItem> */}

                                            <div className="my-1 h-px bg-white/5" />

                                            <MenuItem>
                                                <button
                                                    onClick={handleLogout}
                                                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/30"
                                                >
                                                    <ArrowRightCircleIcon className="size-4 fill-white/30" />
                                                    Logout
                                                </button>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <main className="flex-1 bg-white">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
