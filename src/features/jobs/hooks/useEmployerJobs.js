import { useDispatch, useSelector } from 'react-redux';

import { getEmployerJobs } from '../slices/jobsSlice';
import { useEffect } from 'react';

const useEmployerJobs = (page = 1, limit = 10) => {
  const dispatch = useDispatch();
  const { jobs, loading, error, totalPages } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getEmployerJobs({ page, limit }));
  }, [dispatch, page, limit]);

  return { jobs, loading, error, totalPages };
};

export default useEmployerJobs;