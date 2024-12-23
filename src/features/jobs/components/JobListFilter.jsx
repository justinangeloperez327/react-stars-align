import { Field, Input, Label, Select } from '@headlessui/react'
import React, { useState } from 'react'
import { getJobs, setFilters } from '../slices/jobsSlice'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import jobTypes from '@data/jobTypes'
import { useDispatch } from 'react-redux'

const JobListFilter = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("")
    const [type, setType] = useState("")
    const [location, setLocation] = useState("")
    const [dateListed, setDateListed] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        const filters = { search, type, location, dateListed };
        dispatch(setFilters(filters));
        console.log(filters);
        dispatch(getJobs(new URLSearchParams(filters).toString()));
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <div className=" w-full px-4 lg:px-0">
                    <div className="flex space-x-4">
                        <div className="w-full max-w-lg">
                            <Field>
                                <Label htmlFor="what" className="text-sm/6 font-medium text-white">What</Label>
                                <Input
                                    id="what"
                                    className={clsx(
                                        "mt-3 block w-full rounded-lg border-none bg-white/40 py-1.5 px-3 text-sm/6 text-white",
                                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                                    )}
                                    placeholder="Enter Keywords"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Field>
                        </div>
                        <div className="w-full max-w-lg">
                            <Field>
                                <Label htmlFor="where" className="text-sm/6 font-medium text-white">
                                    Where
                                </Label>
                                <Input
                                    id="where"
                                    className={clsx(
                                        "mt-3 block w-full rounded-lg border-none bg-white/40 py-1.5 px-3 text-sm/6 text-white",
                                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                                    )}
                                    placeholder="Enter City, State, Region"
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </Field>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-4 px-4 lg:px-0">
                    <div className="flex space-x-4">
                        <div className="w-full max-w-xs">
                            <Field>
                                <div className="relative">
                                    <Label htmlFor="job_type" className="text-sm/6 font-medium text-white">
                                        Type
                                    </Label>
                                    <Select
                                        id="job_type"
                                        className={clsx(
                                            "mt-1 block w-full appearance-none rounded-lg border-none bg-white/40 py-1.5 px-3 text-sm/6 text-white",
                                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 capitalize",
                                            "*:text-black "
                                        )}
                                        name="job_type"
                                        aria-label="Job Type"
                                        onChange={(e) => setType(e.target.value)}
                                    >
                                        <option value="">
                                            All work types
                                        </option>
                                        {jobTypes.map((type) => (
                                            <option key={type} value={type} className=''>
                                                {type}
                                            </option>
                                        ))}
                                    </Select>
                                    <ChevronDownIcon
                                        className="group pointer-events-none absolute top-10 right-2.5 size-4 fill-white/60"
                                        aria-hidden="true"
                                    />
                                </div>
                            </Field>
                        </div>
                        <div className="w-full max-w-xs">
                            <Field>
                                <div className="relative">
                                    <Label htmlFor='when' className="text-sm/6 font-medium text-white">
                                        When
                                    </Label>
                                    <Select
                                        id='when'
                                        className={clsx(
                                            "mt-1 block w-full appearance-none rounded-lg border-none bg-white/40 py-1.5 px-3 text-sm/6 text-white",
                                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                                            "*:text-black"
                                        )}
                                        name="date_listed"
                                        aria-label="Date Listed"
                                        onChange={(e) => setDateListed(e.target.value)}
                                    >
                                        <option value="" hidden>
                                            Anytime
                                        </option>
                                        <option value="today">Today</option>
                                        <option value="this-week">This Week</option>
                                        <option value="this-month">This Month</option>
                                        <option value="this-year">This Year</option>
                                    </Select>
                                    <ChevronDownIcon
                                        className="group pointer-events-none absolute top-10 right-2.5 size-4 fill-white/60"
                                        aria-hidden="true"
                                    />
                                </div>
                            </Field>
                        </div>
                        <div className="w-full max-w-xs">
                            <Field>
                                <Label htmlFor="submitButton" className="text-sm/6 font-medium text-white">
                                    &nbsp;
                                </Label>
                                <button
                                    id="submitButton"
                                    type='submit'
                                    className={clsx(
                                        "mt-1 block w-full appearance-none rounded-lg border-none bg-white/80 py-1.5 px-3 text-sm/6 text-black",
                                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                                        "hover:bg-white"
                                    )}
                                >
                                    Search
                                </button>
                            </Field>
                        </div>
                    </div>
                </div>
            </form>
        </>

    )
}

export default JobListFilter