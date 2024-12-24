import { useDispatch, useSelector } from 'react-redux';

import { updateProfile } from '../slices/profileSlice';

const useUpdateProfile = (userData) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.profile);

  const handleUpdateProfile = (userData) => {
    dispatch(updateProfile(userData));
  }

  return { handleUpdateProfile, loading, error };
};

export default useUpdateProfile;