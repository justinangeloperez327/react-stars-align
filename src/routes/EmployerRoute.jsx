import { Navigate } from 'react-router';
import { Outlet } from 'react-router';
import React from 'react'
import { useSelector } from 'react-redux';

const EmployerRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const isEmployer = user?.role === 'employer';
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (!isEmployer) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default EmployerRoute