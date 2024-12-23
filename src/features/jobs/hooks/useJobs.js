import { useDispatch, useSelector } from 'react-redux';

import { getJobs } from '../slices/jobsSlice';
import { useEffect } from 'react';

const useJobs = (query = '') => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getJobs(query));
  }, [dispatch, query]);

  return { jobs, loading, error };
};

export default useJobs;