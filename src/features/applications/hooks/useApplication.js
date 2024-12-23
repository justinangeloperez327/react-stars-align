import { useDispatch, useSelector } from 'react-redux';

import { getApplication } from '../slices/applicationsSlice';
import { useEffect } from 'react';

const useApplication = (applicationId) => {
  const dispatch = useDispatch();
  const { application, loading, error } = useSelector((state) => state.applications);

  useEffect(() => {
    dispatch(getApplication(applicationId));
  }, [applicationId, dispatch]);

  return { application, loading, error };
};

export default useApplication;