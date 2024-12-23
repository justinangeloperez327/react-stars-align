import { useDispatch, useSelector } from 'react-redux';

import { removeJob } from '../slices/jobsSlice';

const useDeleteJob = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.jobs);

  const handleRemoveJob = (jobId) => {
    dispatch(removeJob(jobId));
  };

  return { handleRemoveJob, loading, error };
};

export default useDeleteJob;