import { useDispatch, useSelector } from 'react-redux';

import { acceptApplication } from '../slices/applicationsSlice';

const useAcceptApplication = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.applications);

  const handleAcceptApplication = async (applicationId) => {
    const resultAction = await dispatch(acceptApplication(applicationId));
    if (acceptApplication.fulfilled.match(resultAction)) {
      return true;
    } else {
      return false;
    }
  }
  return { handleAcceptApplication, loading, error };
};

export default useAcceptApplication;