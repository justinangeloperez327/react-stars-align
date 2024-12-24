import { Button, Field, Fieldset, Input, Label, Legend, Textarea } from '@headlessui/react'
import React, { useState } from 'react'

import clsx from 'clsx';
import { useJob } from '@features/jobs';
import { useParams } from 'react-router';
import useSubmitApplication from '../hooks/useSubmitApplication';

const ApplicationForm = () => {
    const { jobId } = useParams();
    const { handleApplicationSubmit, loading, error } = useSubmitApplication();
    const [coverLetter, setCoverLetter] = useState('');
    const [resume, setResume] = useState(null);
    const { job, } = useJob(jobId);

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('coverLetter', coverLetter);
        formData.append('resume', resume);
        formData.append('jobId', jobId);

        handleApplicationSubmit(formData, jobId);
    }
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {job && (
                <>
                    <div className="py-6">
                        <div className="fade-up bg-white p-4 rounded-lg">
                            <h1 className="text-lg font-semibold text-gray-900 mb-4">Job Details</h1>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h2 className="text-md font-bold text-gray-900">Position</h2>
                                    <p className="text-md text-gray-700">{job.title}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h2 className="text-md font-bold text-gray-900">Company</h2>
                                    <p className="text-md text-gray-700">{job.company?.name}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h2 className="text-md font-bold text-gray-900">Location</h2>
                                    <p className="text-md text-gray-700">{job.location}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h2 className="text-md font-bold text-gray-900">Education</h2>
                                    <p className="text-md text-gray-700 capitalize">{job.education}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h2 className="text-md font-bold text-gray-900">Salary</h2>
                                    <p className="text-md text-gray-700">{job.salary}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h2 className="text-md font-bold text-gray-900">Type</h2>
                                    <p className="text-md text-gray-700 capitalize">{job.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fade-up bg-white p-4 rounded-lg">
                        <div className="px-4 sm:px-0">
                            <h1 className="text-lg/7 font-semibold text-gray-900">
                                Application Form
                            </h1>
                        </div>
                        <div className="mt-6 border-t border-gray-100">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <Fieldset>
                                    <Field>
                                        <Label
                                            className="block font-medium text-md/6 text-black text-left"
                                            htmlFor="coverLetter"
                                        >
                                            Cover Letter
                                        </Label>
                                        <Legend className="text-sm/6 text-gray-500">Tell us why you are the best fit for this job</Legend>
                                        <Textarea
                                            id="coverLetter"
                                            name='coverLetter'
                                            type="text"
                                            aria-label='Cover Letter'
                                            className="rounded-md shadow-md shadow-gray-300 block mt-2 w-full py-2 px-3 mb-1"
                                            rows={5}
                                            value={coverLetter}
                                            onChange={(e) => { setCoverLetter(e.target.value) }}
                                            placeholder='Enter your cover letter here'
                                            autoFocus
                                            required
                                        />
                                    </Field>
                                    <Field className={'mt-4'}>
                                        <Label
                                            className="block font-medium text-md/6 text-black text-left"
                                            htmlFor="resume"
                                        >
                                            Resume
                                        </Label>
                                        <Legend className="text-sm/6 text-gray-500">PDF, DOC, DOCX</Legend>
                                        <Input
                                            id="resume"
                                            name='resume'
                                            type="file"
                                            aria-label='Resume'
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </Field>
                                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

                                    <div className="px-4 py-6 flex w-full sm:px-0 justify-center">
                                        <Button
                                            className={clsx(
                                                'bg-violet-600 px-4 py-2 rounded-md text-white',
                                                'focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50',
                                                { 'hover:bg-violet-700': !loading }
                                            )}
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? 'Submitting...' : 'Submit Application'}
                                        </Button>
                                    </div>
                                </Fieldset>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>

    )
}

export default ApplicationForm