import { Field, Input, Label } from '@headlessui/react'
import React, { useState } from 'react'

import clsx from 'clsx'

const CompanyListFilter = () => {
    const [search, setSearch] = useState('')

    return (
        <>
            <div className="w-full px-4 lg:px-0">
                <div className="flex space-x-4">
                    <div className="w-full max-w-lg">
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">What</Label>
                            <Input
                                className={clsx(
                                    "mt-3 block w-full rounded-lg border-none bg-white/40 py-1.5 px-3 text-sm/6 text-white",
                                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                                )}
                                value={search}
                                placeholder="Enter Keywords"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Field>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4 px-4 lg:px-0">
                <div className="flex space-x-4">

                    <div className="w-full max-w-xs">
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">
                                &nbsp;
                            </Label>
                            <button
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
        </>
    )
}

export default CompanyListFilter