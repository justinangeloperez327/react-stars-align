import { useDispatch, useSelector } from 'react-redux';

import { getEmployerJobs } from '../slices/jobsSlice';
import { useEffect } from 'react';

const useEmployerJobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getEmployerJobs());
  }, [dispatch]);

  return { jobs, loading, error };
};

export default useEmployerJobs;