import { Navigate, Outlet } from 'react-router';

import React from 'react'
import { useSelector } from 'react-redux';

const ProtectedApplicationForm = () => {
    const { job } = useSelector(state => state.jobs);

    if (job?.applied) {
        return <Navigate to={`/jobs/${job._id}/details`} />;
    }
    return <Outlet />;
}

export default ProtectedApplicationForm