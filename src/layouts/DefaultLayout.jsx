import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { Link, Outlet } from 'react-router';
import React, { useState } from 'react';

import Footer from '../components/Footer';
import MobileProfileDropdown from '../features/authentication/components/MobileProfileDropdown';
import NavbarLogo from '../components/NavbarLogo';
import ParticleEffect from '../components/ParticleEffect';
import { ProfileDropdown } from '../features/authentication';
import { Transition } from '@headlessui/react'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const isAuthenticated = useSelector((state) => state.auth.token);
    return (
        <header className="sticky top-0 bg-black/90 backdrop-blur-md z-50">
            <div className="relative pt-2 md:pt-6 pb-6 text-white">
                <div className="max-w-6xl mx-auto w-full">
                    <nav className="relative flex items-center justify-between mx-4 xl:mx-0 sm:h-10" aria-label="Global">
                        <div className="flex items-center justify-between w-full lg:w-auto">
                            <Link to="/" className="block items-center justify-center">
                                <NavbarLogo />
                            </Link>
                            <div className="lg:hidden">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
                                    onClick={toggleMobileMenu}
                                >
                                    {isMobileMenuOpen ? (
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:flex md:space-x-10 md:justify-start md:items-center uppercase">
                            <Link to="/" className="text-lg font-bold hover:underline">
                                JOBS
                            </Link>
                            {/* <Link to="/companies" className="text-lg font-bold hover:underline">
                                COMPANIES
                            </Link> */}
                            {isAuthenticated &&
                                <Link to="/applied-jobs" className="text-lg font-bold hover:underline">
                                    Applied
                                </Link>
                            }
                            {!isAuthenticated &&
                                <Link to="/about" className="text-lg font-bold hover:underline">
                                    ABOUT
                                </Link>
                            }
                        </div>
                        <div className="hidden lg:flex items-center justify-end space-x-4">
                            {isAuthenticated ? (
                                <ProfileDropdown />
                            ) : (
                                <>
                                    <Link to="/register" className="text-lg font-bold hover:underline">
                                        Register
                                    </Link>
                                    <Link to="/login" className="text-lg font-bold hover:underline">
                                        Login
                                    </Link>
                                </>

                            )}

                        </div>
                    </nav>
                    {isMobileMenuOpen && (
                        <Transition show={isMobileMenuOpen}
                            className="transition duration-1000 ease-in-out transform"
                            enter="transition-opacity duration-1000"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-1000"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="lg:hidden mt-4 mx-4">
                                <div className="space-y-4">
                                    <Link to="/" className="block text-lg font-bold">
                                        JOBS
                                    </Link>
                                    {/* <Link to="/companies" className="block text-lg font-bold">
                                        COMPANIES
                                    </Link> */}
                                    <Link to="/about" className="block text-lg font-bold">
                                        ABOUT
                                    </Link>
                                    {isAuthenticated ? (
                                        <MobileProfileDropdown />

                                    ) : (
                                        <>
                                            <Link to="/register" className="block text-lg font-bold">
                                                Register
                                            </Link>
                                            <Link to="/login" className="block text-lg font-bold">
                                                Login
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Transition>
                    )}
                </div>
            </div>
        </header>
    );
}

const DefaultLayout = () => {
    return (
        <>
            <ParticleEffect />
            <div className="font-mono antialiased flex flex-col min-h-screen bg-gradient-to-r from-violet-950 to-indigo-900">

                <Navbar />

                <main className="flex-grow">
                    <div className="py-12">
                        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                            <Outlet />
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default DefaultLayout;