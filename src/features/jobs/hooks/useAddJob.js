import { useDispatch, useSelector } from 'react-redux';

import { createJob } from '../slices/jobsSlice';
import { useNavigate } from 'react-router';

const useAddJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.jobs);

  const handleCreateJob = async (userData) => {
    const resultAction = await dispatch(createJob(userData));
    if (createJob.fulfilled.match(resultAction)) {
      navigate('/employer/jobs');
    } else {
      return false;
    }
    return true;
  };

  return { handleCreateJob, loading, error };
};

export default useAddJob;