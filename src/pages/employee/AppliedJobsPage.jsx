import { AppliedJobList, JobListFilter } from '@features/jobs'

import React from 'react'

const JobsSection = () => {
    return <>
        <section id="jobs-section" className='text-left'>
            <div className="mb-10 fade-up">
                <JobListFilter />
            </div>
            <div className=''>
                <AppliedJobList />
            </div>
        </section>
    </>
}

const HomePage = () => {
    return (
        <>
            <JobsSection />
        </>
    )
}

export default HomePage