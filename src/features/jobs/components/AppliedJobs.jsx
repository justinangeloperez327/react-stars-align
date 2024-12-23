import JobCard from './JobCard'
import useAppliedJobs from '../hooks/useAppliedJobs'

const JobsList = () => {
    const { jobs, loading, error } = useAppliedJobs();

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {jobs.map((job, index) => (
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
            ))}
        </>
    )
}

export default JobsList