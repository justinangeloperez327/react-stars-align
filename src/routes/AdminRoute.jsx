import { Navigate } from 'react-router';
import { Outlet } from 'react-router';
import React from 'react'
import { useSelector } from 'react-redux';

const AdminRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const isAdmin = user?.role === 'admin';

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (!isAdmin) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default AdminRoute