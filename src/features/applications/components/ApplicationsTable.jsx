import { ChevronDownIcon, EyeIcon } from '@heroicons/react/20/solid';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import DataTable from '@components/DataTable'
import { Link } from 'react-router';
import React from 'react'
import { formatDate } from '@utils/DateFormat';
import useApplications from '../hooks/useApplications';

const ApplicationsTable = () => {
    const { applications, loading, error } = useApplications();

    const columns = [
        { headerName: 'Applicant', field: 'applicant' },
        { headerName: 'Job Title', field: 'job' },
        { headerName: 'Status', field: 'status' },
        { headerName: 'Deadline', field: 'jobDeadline' },
        { headerName: 'Applied At', field: 'appliedAt' },
        { headerName: 'Actions', field: 'actions' },
    ];

    const formattedApplications = applications?.map((application) => ({
        ...application,
        applicant: `${application.user.email}`,
        status: application.status.replace('-', ' '),
        job: `${application.job.title}`,
        jobDeadline: formatDate(application.job.deadline),
        appliedAt: formatDate(application.appliedAt),
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
                            <Link to={`${application._id}/view`} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/50">
                                <EyeIcon className="size-4 fill-white/40" />
                                View
                                <kbd className="ml-auto hidden font-sans text-xs text-white/40 group-data-[focus]:inline">⌘v</kbd>
                            </Link>
                        </MenuItem>

                        <div className="my-1 h-px bg-white/5" />
                    </MenuItems>
                </Menu>
            </>
        ),
    }));

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {applications && <DataTable columns={columns} data={formattedApplications} bg="bg-black" text='text-white' />}
        </>
    )
}

export default ApplicationsTable