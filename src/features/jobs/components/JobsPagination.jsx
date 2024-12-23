import Pagination from '@components/Pagination'
import React from 'react'

const JobsPagination = ({ page, totalPages, setPage }) => {
    return (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    )
}

export default JobsPagination