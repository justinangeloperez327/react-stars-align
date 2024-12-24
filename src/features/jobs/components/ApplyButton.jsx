import { useNavigate, useParams } from 'react-router';

import { Button } from '@headlessui/react'
import React from 'react'
import clsx from 'clsx';
import { useSelector } from 'react-redux';

const ApplyButton = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.token);
    const job = useSelector((state) => state.jobs.job);
    console.log(job);
    const handleApply = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate(`/jobs/${jobId}/application`);
        }
    }

    return (
        <Button
            onClick={handleApply}
            className={clsx(
                'w-full mt-4 px-4 py-2 text-white rounded-md',
                job?.applied && 'bg-gray-400 cursor-not-allowed',
                !job?.applied && 'bg-violet-600 hover:bg-violet hover:bg-opacity-90'
            )}
            disabled={job?.applied}
        >
            {job?.applied ? 'Applied' : 'Apply'}
        </Button>
    )
}

export default ApplyButton