import { Outlet } from 'react-router'
import React from 'react'

const JobsLayout = () => {
    return (
        <div className='mt-2 flex '>
            <div className='w-full p-2 lg:p-4 m-2 lg:m-10 min-h-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default JobsLayout