import { useDispatch, useSelector } from 'react-redux';

import { fetchEducation } from '../slices/profileSlice';
import { useEffect } from 'react';

const useEducation = () => {
  const dispatch = useDispatch();
  const { education, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchEducation());
  }, [dispatch]);

  return { education, loading, error };
};

export default useEducation;