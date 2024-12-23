import { Navigate, Outlet } from 'react-router';

import React from 'react';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const isEmployer = user?.role === 'employer';
    const isAdmin = user?.role === 'admin';

    if (isAuthenticated ) {
        if (isEmployer) {
            return <Navigate to="/employer/dashboard" />;
        }
        if (isAdmin) {
            return <Navigate to="/admin/dashboard" />;
        }
    }

    return <Outlet />;

};

export default PublicRoute;