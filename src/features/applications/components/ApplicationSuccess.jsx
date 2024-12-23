import { Button } from '@headlessui/react'
import { Link } from 'react-router'
import React from 'react'

const ApplicationSuccess = () => {
    return (
        <div>
            <div className="bg-white p-4 rounded-lg">
                <div className="px-4 sm:px-0">
                    <h1 className="text-lg/7 font-semibold text-gray-900">
                        Application Submitted Successfully
                    </h1>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <p className="text-center">Thank you for applying to this job. You will be contacted if you are selected for an interview.</p>
                </div>
                <div className="px-4 py-6 flex w-full sm:px-0 justify-center">
                    <Link to='/' className="w-full sm:w-auto">
                        <Button>
                            Back to Jobs
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ApplicationSuccess