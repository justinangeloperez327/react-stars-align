import React from 'react'

const AboutPage = () => {
    return (
        <div className="px-4 py-6">
            <div className="fade-up bg-white p-4 rounded-lg">
                <div className="px-4 sm:px-0">
                    <h1 className="text-2xl font-semibold text-gray-700">About </h1>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-4">
                    <p className="text-base leading-7 text-gray-700">
                        Welcome to our job board platform! We are dedicated to connecting job seekers with their dream jobs and helping employers find the perfect candidates. Our platform offers a wide range of job listings across various industries and locations. Whether you are looking for a full-time position, part-time work, or freelance opportunities, we have something for everyone.
                    </p>
                    <p className="mt-4 text-base leading-7 text-gray-700">
                        Our mission is to make the job search process as smooth and efficient as possible. We provide tools and resources to help you create a standout resume, prepare for interviews, and stay updated with the latest job market trends. Join our community today and take the next step in your career journey!
                    </p>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-4">
                    <p className="text-base leading-7 text-gray-700">
                        This site was created by Justin Angelo Perez. I am passionate about helping people find their ideal jobs and assisting employers in finding the best talent. Thank you for using our platform!
                    </p>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-4">
                    <p className="text-base leading-7 text-gray-700">
                        This project was completed as part of the DICT program MERN stack course. The course provided comprehensive training on MongoDB, Express.js, React, and Node.js, equipping us with the skills needed to build full-stack web applications. This job board platform is a culmination of the knowledge and experience gained throughout the program.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage