import { useDispatch, useSelector } from 'react-redux';

import { getApplications } from '../slices/applicationsSlice';
import { useEffect } from 'react';

const useApplications = () => {
  const dispatch = useDispatch();
  const { applications, loading, error } = useSelector((state) => state.applications);

  useEffect(() => {
    dispatch(getApplications());
  }, [dispatch]);

  return { applications, loading, error };
};

export default useApplications;