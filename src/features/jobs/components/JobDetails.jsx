import ApplyButton from './ApplyButton';
import React from 'react'
import { formatDate } from '@utils/DateFormat';
import useJob from '../hooks/useJob';
import { useParams } from 'react-router';

const JobDetails = () => {
    const { jobId } = useParams();
    const { job, loading, error } = useJob(jobId);

    return (
        <div className="px-4 py-6">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {job && (
                <div className="fade-up bg-white p-4 rounded-lg">
                    <div className="px-4 sm:px-0">
                        <h1 className="text-lg/7 font-semibold text-gray-900">Job Details</h1>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-gray-700 divide-y-2">
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg/6 font-bold text-gray-900">Position</dt>
                                <dd className="mt-1 text-md/6 font-bold text-gray-700 sm:col-span-2 sm:mt-0">
                                    {job.title}
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg/6 font-semibold text-gray-900">Company</dt>
                                <dd className="mt-1 text-md/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {job.company?.name}
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg/6 font-semibold text-gray-900">Location</dt>
                                <dd className="mt-1 text-md/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {job.location}
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg/6 font-semibold text-gray-900">Description</dt>
                                <dd className="mt-1 text-md/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {job.description}
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg/6 font-semibold text-gray-900">Requirements</dt>
                                <dd className="mt-1 text-md/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {job.requirements}
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg/6 font-semibold text-gray-900">Education</dt>
                                <dd className="capitalize mt-1 text-md/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {job.education}
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg/6 font-semibold text-gray-900">Salary</dt>
                                <dd className="mt-1 text-md/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {job.salary}
                                </dd>
                            </div>

                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg/6 font-semibold text-gray-900">Type</dt>
                                <dd className="capitalize mt-1 text-md/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {job.type}
                                </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg/6 font-semibold text-gray-900">Deadline</dt>
                                <dd className="capitalize mt-1 text-md/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {formatDate(job.deadline)}
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="px-4 py-6 flex w-full sm:px-0 justify-center">
                        <ApplyButton />
                    </div>
                </div>
            )}
        </div>
    )
}

export default JobDetails