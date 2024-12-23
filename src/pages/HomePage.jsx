import { JobList, JobListFilter } from '@features/jobs'

import React from 'react'

const HeroSection = () => {
    return (
        <section id="hero-section">
            <div className="relative isolate px-6 lg:pt-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-4 md:py-8 lg:py-16">
                    <div className="text-center">
                        <h1 className="fade-up text-balance text-4xl lg:text-5xl font-semibold tracking-tight lg:tracking-wide text-white">
                            Find your next job
                        </h1>
                        <p className="fade-up mt-8 text-pretty text-lg lg:text-xl font-medium tracking-tight lg:tracking-wide text-white">
                            Search for jobs and apply to them with ease.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const JobsSection = () => {
    return <>
        <section id="jobs-section" className='text-left'>
            <div className="mb-10 fade-up">
                <JobListFilter />
            </div>
            <div className=''>
                <JobList />
            </div>
        </section>
    </>
}

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <JobsSection />
        </>
    )
}

export default HomePage