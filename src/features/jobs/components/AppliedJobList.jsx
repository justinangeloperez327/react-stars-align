import JobAppliedCard from './JobAppliedCard';
import NoJobsApplied from './NoJobsApplied';
import useAppliedJobs from '../hooks/useAppliedJobs';

const AppliedJobList = () => {
    const { jobs, loading, error } = useAppliedJobs();

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {jobs.length > 0 ? jobs.map((job, index) => (
                <JobAppliedCard
                    key={index}
                    id={job._id}
                    title={job.title}
                    company={job.company.name}
                    location={job.location}
                    salary={job.salary}
                    type={job.type}
                    dateApplied={job.dateApplied}
                />
            )) :
                <NoJobsApplied />
            }
        </>
    )
}

export default AppliedJobList