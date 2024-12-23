// filepath: /d:/Projects/mern/job-board-platform/frontend/src/components/Pagination.jsx

import React, { useEffect, useState } from 'react';

import { Button } from '@headlessui/react';
import { useLocation } from 'react-router';

const Pagination = ({ totalPages }) => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const initialPage = parseInt(query.get('page')) || 1;

    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        queryParams.set('page', currentPage);

    }, [currentPage, location.search]);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <Button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`px-4 py-1.5 rounded ${i === currentPage ? 'bg-gray-200 text-gray-700' : 'bg-gray-200 text-gray-700'}`}
                >
                    {i}
                </Button>
            );
        }
        return pageNumbers;
    };

    return (
        <>
            <div className="flex flex-col items-center space-y-2 mt-2">
                <div className="flex justify-center items-center space-x-2">
                    <Button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
                    >
                        Previous
                    </Button>
                    {renderPageNumbers()}
                    <Button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Pagination;