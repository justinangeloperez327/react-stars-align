import { useDispatch, useSelector } from 'react-redux';

import { addExperience } from '../slices/profileSlice';

const useUpdateExperience = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.profile);

  const handleUpdateExperience = async (education) => {
    const resultAction = await dispatch(addExperience(education));
    if (addExperience.fulfilled.match(resultAction)) {
      return true;
    } else {
      return false;
    }
  }

  return { handleUpdateExperience, loading, error };
};

export default useUpdateExperience;