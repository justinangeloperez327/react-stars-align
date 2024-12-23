import { ApplicationsTable } from '@features/applications'
import React from 'react'

const EmployerJobApplicationsPage = () => {
    return (
        <>
            <div className="bg-black shadow-sm rounded-md p-4 h-max flex justify-between items-center">
                <div>
                    <h1 className="text-2xl text-white">
                        Jobs
                    </h1>
                </div>
            </div>

            <div className='relative bg-black shadow-sm rounded-md p-6 h-max mt-4 w-full'>
                <ApplicationsTable />
            </div>
        </>
    )
}

export default EmployerJobApplicationsPage