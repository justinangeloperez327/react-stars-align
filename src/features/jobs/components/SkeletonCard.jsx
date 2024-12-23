import React from 'react'

const SkeletonCard = () => {
    return (
        <div className="fade-up group block mb-2 px-6 md:px-0 hover:translate-x-1 transition duration-300 ease-in-out">
            <div
                className="relative rounded-lg shadow-md px-2 md:px-6 py-2 flex bg-white items-center md:space-x-3 border border-transparent "
                style={{ minHeight: "110px" }}
            >
                <div className="flex flex-col md:flex-row w-full font-sans tracking-wide">
                    <div className="flex-1 min-w-0 px-2 md:pl-6 mb-2 md:mb-0 w-full">
                        <span className="absolute inset-0" aria-hidden="true"></span>
                        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                        <div className="h-6 bg-gray-300 rounded w-2/3 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                    <div className="flex-none md:flex flex-col md:justify-end text-sm text-gray-500 px-2">
                        <div className="flex-none md:flex sm:justify-end mb-1 lg:mb-4">
                            <div className="flex items-center mr-4 mb-1 md:mb-0 text-sm text-gray-500 truncate">
                                <div className="h-5 w-5 bg-gray-300 rounded-full mr-1.5"></div>
                                <div className="h-4 bg-gray-300 rounded w-20"></div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-5 w-5 bg-gray-300 rounded-full mr-1.5"></div>
                                <div className="h-4 bg-gray-300 rounded w-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonCard
