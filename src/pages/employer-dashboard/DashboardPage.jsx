import React from 'react'

const EmployerDashboardPage = () => {
    return (
        <div className='mt-3 flex'>
            <div className='w-full p-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='bg-white shadow rounded-lg p-6'>
                        <h2 className='text-xl font-bold mb-4'>Jobs</h2>
                        <p>Total Jobs: 50</p>
                        <p>Active Jobs: 30</p>
                        <p>Closed Jobs: 20</p>
                    </div>
                    <div className='bg-white shadow rounded-lg p-6'>
                        <h2 className='text-xl font-bold mb-4'>Applications</h2>
                        <p>Total Employees: 100</p>
                        <p>Active Employees: 80</p>
                        <p>Inactive Employees: 20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerDashboardPage