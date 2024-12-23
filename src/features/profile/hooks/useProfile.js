import { useDispatch, useSelector } from 'react-redux';

import { fetchProfile } from '../slices/profileSlice';
import { useEffect } from 'react';

const useProfile = () => {
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return { profile, loading, error };
};

export default useProfile;