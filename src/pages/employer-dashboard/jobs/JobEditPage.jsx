import { EditJobForm } from '@features/jobs'
import React from 'react'

const JobEditPage = () => {

    return (
        <>
            <div className="bg-black shadow-sm rounded-md p-4 h-max flex justify-between items-center">
                <div>
                    <h1 className="text-2xl text-white">
                        Update Job
                    </h1>
                </div>
            </div>

            <div className='relative bg-black shadow-sm rounded-md p-6 h-max mt-4 w-full xl:w-1/2'>
                <div className='min-w-full'>
                    <EditJobForm />
                </div>
            </div>
        </>
    )
}

export default JobEditPage