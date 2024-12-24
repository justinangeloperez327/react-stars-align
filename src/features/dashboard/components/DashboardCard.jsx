import React, { Suspense } from 'react'

import useDashboard from '../hooks/useDashboard';

const DashboardCard = () => {
    const { totalJobs, totalActiveJobs, totalCloseJobs, totalApplications, totalViewedApplications, totalPendingApplications } = useDashboard();

    return (
        <Suspense fallback={<Loading />}>
            <div className='mt-3 flex'>
                <div className='w-full p-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className='bg-black text-white shadow rounded-lg p-6'>
                            <h2 className='text-xl font-bold mb-4'>Jobs</h2>
                            <p>Total Jobs: {totalJobs}</p>
                            <p>Active Jobs: {totalActiveJobs}</p>
                            <p>Closed Jobs: {totalCloseJobs}</p>
                        </div>
                        <div className='bg-black text-white shadow rounded-lg p-6'>
                            <h2 className='text-xl font-bold mb-4'>Applications</h2>
                            <p>Total Applications: {totalApplications}</p>
                            <p>Viewed Applications: {totalViewedApplications}</p>
                            <p>Inactive Applications: {totalPendingApplications}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

const Loading = () => {
    return (
        <div>...Loading</div>
    )
}

export default DashboardCard