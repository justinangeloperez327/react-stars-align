import { Link, Outlet } from 'react-router'

import ParticleEffect from '../components/ParticleEffect'
import React from 'react'

const AuthLayout = () => {
    return (
        <>
            <ParticleEffect />
            <div className="font-sans text-gray-900 antialiased z-10">
                <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-black">
                    <div className="fade-up">
                        <Link
                            to="/"
                            className="flex w-full font-bold items-center justify-center"
                            style={{ fontSize: "2.5rem" }}
                        >
                            <span className="text-white">STARS</span>
                            <span className="text-violet-800">ALIGN</span>
                        </Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AuthLayout