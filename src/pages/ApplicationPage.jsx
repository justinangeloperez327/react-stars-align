import { ApplicationForm } from '@features/applications'
import React from 'react'

const ApplicationPage = () => {
    return (
        <>
            <div className="bg-white p-4 rounded-lg">
                <div className="px-4 sm:px-0">
                    <h1 className="text-lg/7 font-semibold text-gray-900">
                        Application Form
                    </h1>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <ApplicationForm />
                </div>
            </div>
        </>
    )
}

export default ApplicationPage