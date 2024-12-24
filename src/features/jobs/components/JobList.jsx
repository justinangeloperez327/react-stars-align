import JobCard from './JobCard'
import NoJobFound from './NoJobFound';
import { Suspense } from 'react';
import useJobs from '../hooks/useJobs'

const JobsList = () => {
    const { jobs = [], error } = useJobs();

    return (
        <>
            {error && <p className="text-red-500">{error}</p>}
            <Suspense fallback={<NoJobFound />}>
                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            id={job._id}
                            title={job.title}
                            company={job.company.name}
                            location={job.location}
                            salary={job.salary}
                            type={job.type}
                            dateCreated={job.createdAt}
                        />
                    ))
                ) : (
                    <NoJobFound />
                )}
            </Suspense>
        </>
    )
}

export default JobsList