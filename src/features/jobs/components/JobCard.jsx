import { Link } from 'react-router'
import React from 'react'
import { getTimeAgo } from '@utils/DateFormat'

const Location = ({ location }) => {
    return (
        <div className="flex items-center mr-4 mb-1 md:mb-0 text-sm text-gray-500 truncate">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clipRule="evenodd"
                ></path>
            </svg>
            {location}
        </div>
    )
}

const DatePosted = ({ date }) => {
    return (
        <div className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
            </svg>
            {getTimeAgo(date)}
        </div>
    )
};


const JobCard = ({ id, company, title, type, salary, location, dateCreated }) => {
    return (
        <Link to={`/jobs/${id}/details`} className="fade-up group block mb-2 px-6 md:px-0 hover:translate-x-1 transition duration-300 ease-in-out">
            <div
                className="relative rounded-lg shadow-md px-2 md:px-6 py-2 flex bg-white items-center md:space-x-3 border border-transparent "
                style={{ minHeight: "110px" }}
            >
                <div className="flex flex-col md:flex-row w-full font-sans tracking-wide">
                    <div className="flex-1 min-w-0 px-2 md:pl-6 mb-2 md:mb-0 w-full">
                        <span className="absolute inset-0" aria-hidden="true"></span>
                        <p className="text-sm text-gray-500 truncate">{company}</p>
                        <p className="text-md lg:text-lg font-bold text-gray-900">{title}</p>
                        <p className="text-sm text-gray-500 truncate">
                            <span className='capitalize'>{type}</span>
                            {salary && <span className="text-gray-500"> - {salary}</span>}
                        </p>
                    </div>
                    <div className="flex-none md:flex flex-col md:justify-end text-sm text-gray-500 px-2">
                        <div className="flex-none md:flex sm:justify-end mb-1 lg:mb-4">
                            <Location location={location} />
                            <DatePosted date={dateCreated} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default JobCard