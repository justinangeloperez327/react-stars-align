import { Navigate, Outlet } from 'react-router';

import React from 'react'
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.token);
    const isEmployee = useSelector((state) => state.auth.user?.role === 'employee');
    if (!isAuthenticated && !isEmployee) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}

export default ProtectedRoute