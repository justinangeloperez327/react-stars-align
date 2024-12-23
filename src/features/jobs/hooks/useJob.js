import { getJob, getJobDetails } from '../slices/jobsSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

const useJob = (jobId) => {
  const dispatch = useDispatch();
  const { job, loading, error } = useSelector((state) => state.jobs);
  const isAuthenticated = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getJobDetails(jobId));
    } else {
      dispatch(getJob(jobId));
    }

  }, [dispatch, jobId, isAuthenticated]);

  return { job, loading, error };
};

export default useJob;