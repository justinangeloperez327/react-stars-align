import { Outlet } from 'react-router';
import ParticleEffect from '../components/ParticleEffect';
import React from 'react';

const BackgroundLayout = () => {
    return (
        <>
            <ParticleEffect />
            <div className="font-mono antialiased flex flex-col min-h-screen bg-gradient-to-r from-violet-950 to-indigo-900">
                <Outlet />
            </div>
        </>
    );
};

export default BackgroundLayout;