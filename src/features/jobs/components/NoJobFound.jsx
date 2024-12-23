import React from 'react'

const NoJobFound = () => {
    return (
        <div className="fade-up group block mb-2 px-6 md:px-0 transition duration-300 ease-in-out">
            <div className="text-center py-10 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">No Jobs Found</h2>
                <p className="text-gray-500 mt-4">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
        </div>
    )
}

export default NoJobFound