import { Button, Field, Fieldset, Input, Label, Select, Textarea } from '@headlessui/react'
import React, { Suspense, useEffect, useState } from 'react'

import clsx from 'clsx'
import { formatDate } from '@utils/DateFormat';
import useJob from '../hooks/useJob';
import { useParams } from 'react-router';
import useUpdateJob from '../hooks/useUpdateJob';

const EditJobForm = () => {
    const { jobId } = useParams();
    const { job } = useJob(jobId);
    const { handleUpdateJob, loading, error } = useUpdateJob();

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [salary, setSalary] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [deadline, setDeadline] = useState('');

    useEffect(() => {
        if (job) {
            setTitle(job.title || '');
            setType(job.type || '');
            setLocation(job.location || '');
            setDescription(job.description || '');
            setRequirements(job.requirements || '');
            setSalary(job.salary || '');
            setExperience(job.experience || '');
            setEducation(job.education || '');
            if (job.deadline) {
                formatDate(job.deadline)
            }
            setDeadline(job.deadline || '');
        }
    }, [job]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateJob(jobId, {
            title,
            type,
            location,
            description,
            requirements,
            salary,
            experience,
            education,
            deadline
        });
    };

    return (
        <Suspense fallback={<Loading />}>
            <form onSubmit={handleSubmit}>
                <Fieldset>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white" htmlFor="title">
                            Title
                        </Label>
                        <Input
                            className={clsx(
                                'mt-1 block w-full rounded-lg border-none bg-white/20 py-1.5 px-5 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                            id="title"
                            type="text"
                            name="title"
                            aria-label='Title'
                            autoFocus
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Field>
                    <Field className="mt-4">
                        <Label className="text-sm/6 font-medium text-white" htmlFor="description">
                            Description
                        </Label>
                        <Textarea
                            className={clsx(
                                'mt-1 block w-full rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                            id="description"
                            type="text"
                            name="description"
                            aria-label='Description'
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Field>
                    <div className="flex flex-wrap -mx-2">
                        <Field className="mt-4 w-full md:w-1/2 px-2">
                            <Label className="text-sm/6 font-medium text-white" htmlFor="type">
                                Type
                            </Label>
                            <Select
                                id='type'
                                className={clsx(
                                    'mt-1 block w-full rounded-lg border-none bg-white/20 py-2 px-3 text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                    // Make the text of each option black on Windows
                                    '*:text-black'
                                )}
                                name="type"
                                aria-label="Type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="full-time">Full Time</option>
                                <option value="part-time">Part Time</option>
                                <option value="contract">Contract</option>
                                <option value="internship">Internship</option>
                                <option value="temporary">Temporary</option>
                            </Select>

                        </Field>
                        <Field className="mt-4 w-full md:w-1/2 px-2">
                            <Label className="text-sm/6 font-medium text-white" htmlFor="location">
                                Location
                            </Label>
                            <Input
                                className={clsx(
                                    'mt-1 block w-full rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                )}
                                id="location"
                                type="text"
                                name="location"
                                aria-label='Location'
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </Field>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        <Field className="mt-4 w-full md:w-1/2 px-2">
                            <Label className="text-sm/6 font-medium text-white" htmlFor="salary">
                                Salary
                            </Label>
                            <Input
                                className={clsx(
                                    'mt-1 block w-full rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                )}
                                id="salary"
                                type="text"
                                name="salary"
                                aria-label='Salary'
                                required
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            />
                        </Field>

                        <Field className="mt-4 w-full md:w-1/2 px-2">
                            <Label className="text-sm/6 font-medium text-white" htmlFor="experience">
                                Experience
                            </Label>
                            <Input
                                className={clsx(
                                    'mt-1 block w-full rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                )}
                                id="experience"
                                type="number"
                                name="experience"
                                aria-label='Experience'
                                required
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                            />
                        </Field>
                    </div>

                    <div className="flex flex-wrap -mx-2">
                        <Field className="mt-4 w-full md:w-1/2 px-2">
                            <Label className="text-sm/6 font-medium text-white" htmlFor="education">
                                Education
                            </Label>
                            <Select
                                id='education'
                                className={clsx(
                                    'mt-1 block w-full rounded-lg border-none bg-white/20 py-2 px-3 text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                    // Make the text of each option black on Windows
                                    '*:text-black'
                                )}
                                name="education"
                                aria-label="Education"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            >
                                <option value="none">None</option>
                                <option value="high-school">High School</option>
                                <option value="bachelor">Bachelor's Degree</option>
                                <option value="master">Master's Degree</option>
                                <option value="phd">PhD</option>
                            </Select>

                        </Field>

                        <Field className="mt-4 w-full md:w-1/2 px-2">
                            <Label className="text-sm/6 font-medium text-white" htmlFor="deadline">
                                Deadline
                            </Label>
                            <Input
                                className={clsx(
                                    'mt-1 block w-full rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                )}
                                id="deadline"
                                type="date"
                                name="deadline"
                                aria-label='Deadline'
                                required
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </Field>
                    </div>

                    <Field className="mt-4">
                        <Label className="text-sm/6 font-medium text-white" htmlFor="requirements">
                            Requirements
                        </Label>
                        <Textarea
                            className={clsx(
                                'mt-1 block w-full rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                            id="requirements"
                            name="requirements"
                            aria-label='Requirements'
                            required
                            value={requirements}
                            onChange={(e) => setRequirements(e.target.value)}
                        />
                    </Field>
                    {loading && <p>Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}

                    <div className="flex items-center justify-end mt-5">
                        <Button
                            type="submit"
                            aria-label="Add Job"
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            disabled={loading}
                        >
                            {loading ? 'Updating...' : 'Update Job'}
                        </Button>
                    </div>
                </Fieldset>
            </form>
        </Suspense>
    )
}

const Loading = () => {
    return <p>Loading...</p>
}

export default EditJobForm