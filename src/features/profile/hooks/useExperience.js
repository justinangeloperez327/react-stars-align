import { useDispatch, useSelector } from 'react-redux';

import { fetchExperience } from '../slices/profileSlice';
import { useEffect } from 'react';

const useExperience = () => {
  const dispatch = useDispatch();
  const { experience, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchExperience());
  }, [dispatch]);

  return { experience, loading, error };
};

export default useExperience;