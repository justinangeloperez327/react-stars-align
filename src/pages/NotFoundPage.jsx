import { Link } from 'react-router'
import React from 'react'

const NotFoundPage = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen ">
            <h1 className="text-6xl font-bold text-white">404</h1>
            <p className="text-2xl font-semibold text-white">Page Not Found</p>
            <Link to="/" className="mt-4 px-4 py-2 bg-white text-black rounded-md">Go back to Home</Link>
        </section>
    )
}

export default NotFoundPage