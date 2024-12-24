import React, { Suspense } from 'react'
import { useNavigate, useParams } from 'react-router';

import { Button } from '@headlessui/react';
import useAcceptApplication from '../hooks/useAcceptApplication';
import useApplication from '../hooks/useApplication';
import useRejectApplication from '../hooks/useRejectApplication';

const ApplicationDetails = () => {
    const { applicationId } = useParams();
    const { application, error } = useApplication(applicationId);
    const { handleAcceptApplication } = useAcceptApplication();
    const { handleRejectApplication } = useRejectApplication();
    const navigate = useNavigate();
    const acceptApplication = async () => {
        await handleAcceptApplication(applicationId);
        navigate('/employer/applications');
    }

    const rejectApplication = async () => {
        await handleRejectApplication(applicationId);
        navigate('/employer/applications');
    }

    return (
        <>

            {error && <p>{error}</p>}
            <Suspense fallback={<p>Loading...</p>}>
                {application && (
                    <div className="fade-up bg-black text-white p-4 rounded-lg shadow-md">
                        <div className="px-4 sm:px-0">
                            <h1 className="text-lg font-semibold text-white">Application Details</h1>
                        </div>
                        <div className="mt-6 border-t border-gray-200">
                            <dl className="divide-y divide-gray-200">
                                <div className="py-4">
                                    <dt className="text-sm font-medium text-white">Job Title</dt>
                                    <dd className="mt-1 text-sm text-white">{application.job?.title}</dd>
                                </div>
                                <div className="py-4">
                                    <dt className="text-sm font-medium text-white">Status</dt>
                                    <dd className="mt-1 text-sm text-white capitalize">{application.status}</dd>
                                </div>
                                <div className="py-4">
                                    <dt className="text-sm font-medium text-white">Applicant Email</dt>
                                    <dd className="mt-1 text-sm text-white">{application.user?.email}</dd>
                                </div>
                                <div className="py-4">
                                    <dt className="text-sm font-medium text-white">Cover Letter</dt>
                                    <dd className="mt-1 text-sm ">
                                        <div className="max-h-60 overflow-y-auto text-black p-4 border border-gray-300 rounded-md bg-gray-50">
                                            {application.coverLetter}
                                        </div>
                                    </dd>
                                </div>
                                <div className="py-4">
                                    {/* <dt className="text-sm font-medium text-white">Resume</dt> */}
                                    <dd className="mt-1 text-sm text-white">
                                        <a
                                            href={application.resume}
                                            rel="noopener noreferrer"
                                            target='_blank'
                                            download={application.user?.email + '_resume.pdf'}
                                            className="ml-4 text-blue-500 hover:underline"
                                        >
                                            Download Resume
                                        </a>
                                    </dd>
                                    {/* <dd className="mt-4">
                                    <iframe
                                        src={application.resume}
                                        width="100%"
                                        height="500px"
                                        title="Resume"
                                        className="border border-gray-300"
                                    ></iframe>
                                </dd> */}
                                </div>

                            </dl>
                        </div>
                        {application.status === 'submitted' && (
                            <div className="px-4 py-6 flex w-full sm:px-0 justify-center">
                                <Button onClick={() => { acceptApplication() }} className="mr-4 bg-violet-800 text-white px-4 py-2 rounded-md hover:bg-violet-600">
                                    Accept
                                </Button>
                                <Button onClick={() => { rejectApplication() }} className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">
                                    Reject
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </Suspense>
        </>
    )
}

export default ApplicationDetails