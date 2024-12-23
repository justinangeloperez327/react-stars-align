import React from 'react'
import { Select } from '@headlessui/react'

const SelectItemPerPage = () => {
    return (
        <Select className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>w
        </Select>
    )
}

export default SelectItemPerPage