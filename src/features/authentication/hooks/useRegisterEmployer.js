import { registerUserEmployer, resetAuthState } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const useRegisterEmployer = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    const resultAction = await dispatch(registerUserEmployer(userData));
    if (registerUserEmployer.fulfilled.match(resultAction)) {
      navigate('/register-success');
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, [dispatch]);

  return { handleRegister, loading, error };
};

export default useRegisterEmployer;