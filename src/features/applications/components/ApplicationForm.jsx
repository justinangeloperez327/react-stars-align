import { Button, Field, Fieldset, Input, Label, Legend, Textarea } from '@headlessui/react'
import React, { useState } from 'react'

import clsx from 'clsx';
import { useParams } from 'react-router';
import useSubmitApplication from '../hooks/useSubmitApplication';

const ApplicationForm = () => {
    const { jobId } = useParams();
    const { handleApplicationSubmit, loading, error } = useSubmitApplication();
    const [coverLetter, setCoverLetter] = useState('');
    const [resume, setResume] = useState(null);

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
                            'hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50'
                        )}
                        type="submit"
                        disabled={loading}
                    >
                        Submit
                    </Button>
                </div>
            </Fieldset>
        </form>
    )
}

export default ApplicationForm