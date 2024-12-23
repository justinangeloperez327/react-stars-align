import { Navigate, Outlet } from 'react-router';

import React from 'react';
import { useSelector } from 'react-redux';

const AuthRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.token);
    
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoute;