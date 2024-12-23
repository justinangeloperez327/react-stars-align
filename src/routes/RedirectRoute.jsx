import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const RedirectRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const isEmployer = user?.role === 'employer';

    if (isAuthenticated && isEmployer) {
        return <Navigate to="/login" />;
    }

    if (!isEmployer) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default RedirectRoute