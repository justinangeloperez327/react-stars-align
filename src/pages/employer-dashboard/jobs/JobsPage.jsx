import { JobsTable } from '@features/jobs'
import { Link } from 'react-router'
import React from 'react'

const EmployerJobsPage = () => {
    return (
        <>
            <div className="bg-black shadow-sm rounded-md p-4 h-max flex justify-between items-center">
                <div>
                    <h1 className="text-2xl text-white">
                        Jobs
                    </h1>
                </div>
                <div>
                    <Link to={`/employer/jobs/create`} className="bg-white hover:bg-gray-400 text-black font-semibold py-1.5 font-mono px-3 rounded ml-4">
                        New
                    </Link>
                </div>
            </div>

            <div className='relative bg-black shadow-sm rounded-md p-6 h-max mt-4 w-full'>
                <JobsTable />
            </div>
        </>
    )
}

export default EmployerJobsPage