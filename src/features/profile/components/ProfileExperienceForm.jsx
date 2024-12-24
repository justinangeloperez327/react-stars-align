import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Field, Fieldset, Input, Label } from '@headlessui/react'
import React, { Suspense, useState } from 'react'

import { PlusIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import useAddExperience from '../hooks/useAddExperience';
import { useSelector } from 'react-redux';
import useUpdateExperience from '../hooks/useUpdateExperience';

const ProfileExperienceForm = () => {
    const { handleAddExperience } = useAddExperience();
    const { handleUpdateExperience } = useUpdateExperience();
    const { experience } = useSelector((state) => state.profile);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    let [isOpen, setIsOpen] = useState(false)

    const handleSubmitEducation = async (e) => {
        e.preventDefault();
        if (!isEdit) {
            await handleAddExperience({ title, company, startDate, endDate });
        } else {
            await handleUpdateExperience({ id, title, company, startDate, endDate });
        }

        setTitle('');
        setCompany('');
        setStartDate('');
        setEndDate('');
        setIsOpen(false);
    };

    const editExperience = (index) => {
        setIsEdit(true);
        const edu = experience[index];
        setId(edu._id);
        setTitle(edu.title);
        setCompany(edu.company);
        setStartDate(edu.startDate);
        setEndDate(edu.endDate);
        setIsOpen(true);
    }

    const handleDeleteExperience = (index) => {
        console.log('Delete Education', index);
    }

    const openExperienceForm = () => {
        setIsEdit(false);
        setTitle('');
        setCompany('');
        setStartDate('');
        setEndDate('');
        setIsOpen(true)
    }

    const closeExperienceForm = () => {
        setIsOpen(false)
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="fade-up mt-2 bg-white p-4 rounded-lg">
                <div className="px-4 sm:px-0">
                    <h1 className="text-lg/7 font-semibold text-gray-900">
                        Experience
                    </h1>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <div className="mt-4">
                        <Fieldset>
                            {experience.map((exp, index) => (
                                <div key={index}
                                    className={clsx(
                                        'mb-4',
                                        index !== 0 && 'border-t-2 border-gray-400 pt-4'
                                    )}
                                >
                                    <div className='flex space-x-4 flex-row'>
                                        <Field className="basis-1/2">
                                            <Label className="block text-sm font-medium text-gray-700" htmlFor={`title-${index}`}>Title</Label>
                                            <p id={`title-${index}`}>{exp.title}</p>
                                        </Field>
                                        <Field className="basis-1/2">
                                            <Label className="block text-sm font-medium text-gray-700" htmlFor={`company-${index}`}>Company</Label>
                                            <p id={`company-${index}`}>{exp.company}</p>
                                        </Field>
                                    </div>
                                    <div className='flex space-x-4 flex-row mt-4'>
                                        <Field className="basis-1/2">
                                            <Label className="block text-sm font-medium text-gray-700" htmlFor={`startDate-${index}`}>Start Date</Label>
                                            <p id={`startDate-${index}`}>{exp.startDate}</p>
                                        </Field>
                                        <Field className="basis-1/2">
                                            <Label className="block text-sm font-medium text-gray-700" htmlFor={`endDate-${index}`}>End Date</Label>
                                            <p id={`endDate-${index}`}>{exp.endDate}</p>
                                        </Field>
                                    </div>
                                    <div className="flex justify-end space-x-2 mt-4">
                                        <Button
                                            className="text-blue-600 px-2 py-1 border rounded-md border-blue-600 hover:bg-blue-600 hover:text-white"
                                            onClick={() => editExperience(index)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            className="text-red-600 px-2 py-1 border rounded-md border-red-600 hover:bg-red-600 hover:text-white"
                                            onClick={() => handleDeleteExperience(index)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            <Button
                                onClick={openExperienceForm}
                                className="text-violet-800 px-2 py-2 border rounded-md border-violet-800 hover:bg-violet-800 hover:text-white"
                            >
                                <PlusIcon className="h-4 w-4" />
                            </Button>
                            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeExperienceForm}>
                                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4">
                                        <DialogPanel
                                            transition
                                            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                                        >
                                            <DialogTitle as="h3" className="text-lg/7 font-medium text-black">
                                                Add Education
                                            </DialogTitle>
                                            <form onSubmit={handleSubmitEducation}>
                                                <Fieldset>
                                                    <Field className={'mt-4'}>
                                                        <Label
                                                            className="block text-sm font-medium text-gray-700"
                                                            htmlFor='school'
                                                        >
                                                            Title
                                                        </Label>
                                                        <Input
                                                            className="rounded-md shadow-md shadow-violet-200 block mt-1 w-full py-2 px-3"
                                                            id="school"
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                            placeholder='Title/Position'
                                                            required
                                                        />
                                                    </Field>
                                                    <Field className={'mt-4'}>
                                                        <Label
                                                            className="block text-sm font-medium text-gray-700"
                                                            htmlFor='degree'
                                                        >
                                                            Degree
                                                        </Label>
                                                        <Input
                                                            className="rounded-md shadow-md shadow-violet-200 block mt-1 w-full py-2 px-3"
                                                            id="degree"
                                                            value={company}
                                                            onChange={(e) => setCompany(e.target.value)}
                                                            placeholder='Company'
                                                        />
                                                    </Field>
                                                    <Field className={'mt-4'}>
                                                        <Label
                                                            className="block text-sm font-medium text-gray-700"
                                                            htmlFor='startDate'
                                                        >
                                                            Start Date
                                                        </Label>
                                                        <Input
                                                            type='date'
                                                            className="rounded-md shadow-md shadow-violet-200 block mt-1 w-full py-2 px-3"
                                                            id="startDate"
                                                            value={startDate}
                                                            onChange={(e) => setStartDate(e.target.value)}
                                                            placeholder='Start Date'
                                                            required
                                                        />
                                                    </Field>
                                                    <Field className={'mt-4'}>
                                                        <Label
                                                            className="block text-sm font-medium text-gray-700"
                                                            htmlFor='endDate'
                                                        >
                                                            End Date
                                                        </Label>
                                                        <Input
                                                            type='date'
                                                            className="rounded-md shadow-md shadow-violet-200 block mt-1 w-full py-2 px-3"
                                                            id="endDate"
                                                            value={endDate}
                                                            onChange={(e) => setEndDate(e.target.value)}
                                                            placeholder='End Date'
                                                            required
                                                        />
                                                    </Field>
                                                    <div className="mt-5 flex justify-between ">
                                                        <Button
                                                            type='button'
                                                            className="inline-flex items-center gap-2 rounded-md bg-gray-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                                            onClick={closeExperienceForm}
                                                        >
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            type='submit'
                                                            className="inline-flex items-center gap-2 rounded-md bg-violet-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-violet-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-violet-700"
                                                        >
                                                            Save
                                                        </Button>
                                                    </div>
                                                </Fieldset>
                                            </form>
                                        </DialogPanel>
                                    </div>
                                </div>
                            </Dialog>
                        </Fieldset>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default ProfileExperienceForm