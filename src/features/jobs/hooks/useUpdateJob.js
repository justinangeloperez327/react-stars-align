import { useDispatch, useSelector } from 'react-redux';

import { updateJob } from '../services/jobsService';
import { useNavigate } from 'react-router';

const useUpdateJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.jobs);

  const handleUpdateJob = async (jobId, job) => {
    const resultAction = await dispatch(updateJob(jobId, job));
    if (updateJob.fulfilled.match(resultAction)) {
      navigate('/employer/jobs');
    } else {
      return false;
    }
  };

  return { handleUpdateJob, loading, error };
};

export default useUpdateJob;