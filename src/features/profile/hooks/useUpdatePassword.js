import { useDispatch, useSelector } from 'react-redux';

import { updatePassword } from '../slices/profileSlice';

const useUpdatePassword = (passwordData) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.profile);

  const handleUpdatePasswod = async (passwordData) => {
    await dispatch(updatePassword(passwordData));
  }

  return { handleUpdatePasswod, loading, error };
};

export default useUpdatePassword;