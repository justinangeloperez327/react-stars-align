import { registerUser, resetAuthState } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

const useRegister = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleRegister = (userData) => {
    dispatch(registerUser(userData));
  };

  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, [dispatch]);

  return { handleRegister, loading, error };
};

export default useRegister;