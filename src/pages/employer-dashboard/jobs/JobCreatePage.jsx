import { AddJobForm } from '@features/jobs'
import React from 'react'

const JobCreatePage = () => {

    return (
        <>
            <div className="bg-black shadow-sm rounded-md p-4 h-max flex justify-between items-center">
                <div>
                    <h1 className="text-2xl text-white">
                        New Job
                    </h1>
                </div>
            </div>

            <div className='relative bg-black shadow-sm rounded-md p-6 h-max mt-4 w-full xl:w-1/2'>
                <div className='min-w-full'>
                    <AddJobForm />
                </div>
            </div>
        </>
    )
}

export default JobCreatePage