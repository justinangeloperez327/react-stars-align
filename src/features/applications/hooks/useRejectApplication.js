import { useDispatch, useSelector } from 'react-redux';

import { rejectApplication } from '../slices/applicationsSlice';

const useRejectApplication = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.applications);

  const handleRejectApplication = async (applicationId) => {
    const resultAction = await dispatch(rejectApplication(applicationId));
    if (rejectApplication.fulfilled.match(resultAction)) {
      return true;
    } else {
      return false;
    }
  }

  return { handleRejectApplication, loading, error };
};

export default useRejectApplication;