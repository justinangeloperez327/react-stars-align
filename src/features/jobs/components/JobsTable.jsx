import { ChevronDownIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { useState } from 'react'

import DataTable from '@components/DataTable'
import DeleteJobDialogBox from './DeleteJobDialogBox';
import { Link } from 'react-router';
import { formatDate } from '@utils/DateFormat';
import useEmployerJobs from '../hooks/useEmployerJobs';
import useRemoveJob from '../hooks/useRemoveJob';

const JobsTable = () => {

    const { jobs, loading, error } = useEmployerJobs();
    const { handleRemoveJob } = useRemoveJob();
    const columns = [
        { headerName: 'Title', field: 'title' },
        { headerName: 'Location', field: 'location' },
        { headerName: 'Type', field: 'type' },
        { headerName: 'Salary', field: 'salary' },
        { headerName: 'Posted At', field: 'postedAt' },
        { headerName: 'Deadline', field: 'deadline' },
        { headerName: 'Applicants', field: 'applicants' },
        { headerName: 'Actions', field: 'actions' },
    ];

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState(null);

    const openDialog = (jobId) => {
        setSelectedJobId(jobId);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedJobId(null);
    };

    const confirmDeleteJob = () => {
        handleRemoveJob(selectedJobId);
        closeDialog();
    };

    const formattedJobs = jobs.map((job) => ({
        ...job,
        postedAt: formatDate(job.createdAt),
        deadline: formatDate(job.deadline),
        type: job.type.replace('-', ' '),
        applicants: (
            <>
                <Link to={`${job._id}/applications`}>
                    {job.applicants.length}
                </Link>
            </>
        ),
        actions: (
            <>
                <Menu>
                    <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                        Action
                        <ChevronDownIcon className="size-4 fill-white/80" />
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className=" w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        <MenuItem>
                            <Link to={`${job._id}/edit`} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/50">
                                <PencilIcon className="size-4 fill-white/40" />
                                Edit
                                <kbd className="ml-auto hidden font-sans text-xs text-white/40 group-data-[focus]:inline">⌘E</kbd>
                            </Link>
                        </MenuItem>

                        <div className="my-1 h-px bg-white/5" />

                        <MenuItem>
                            <button onClick={(e) => { openDialog(job._id) }} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/50">
                                <TrashIcon className="size-4 fill-white/40" />
                                Delete
                                <kbd className="ml-auto hidden font-sans text-xs text-white/40 group-data-[focus]:inline">⌘D</kbd>
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </>
        ),
    }));

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {jobs && <DataTable columns={columns} data={formattedJobs} bg="bg-black" text='text-white' />}
            <DeleteJobDialogBox isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} deleteJob={confirmDeleteJob} />
        </>
    )
}

export default JobsTable