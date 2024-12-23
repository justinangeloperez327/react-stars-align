import { loginUser, resetAuthState } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const useLogin = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const { job } = useSelector((state) => state.jobs);
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    const resultAction = await dispatch(loginUser(credentials));
    if (loginUser.fulfilled.match(resultAction)) {
      const userRole = resultAction.payload.user.role;
      console.log(job._id);
      console.log(userRole);
      if (userRole === 'admin') {
        navigate('/admin/dashboard');
      } else if (userRole === 'employer') {
        navigate('/employer/dashboard');
      } else {
        if (job) {
          navigate(`/jobs/${job._id}/application`);
        } else {
          navigate('/');
        }
      }
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

  return { handleLogin, loading, error };
};

export default useLogin;