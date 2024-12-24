import { Link } from 'react-router'
import React from 'react'

const RegisterSuccess = () => {
    return (
        <div className="fade-up group block mb-2 px-6 md:px-0 transition duration-300 ease-in-out">
            <div className="text-center py-10 px-4 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">Registration Successful</h2>
                <p className="text-gray-500 mt-4">
                    You have successfully registered. Please go to login page.
                </p>
                <Link to="/login" className="block mt-4 text-violet-800 hover:underline">Login</Link>
            </div>
        </div>
    )
}

export default RegisterSuccess