import { addExperience, fetchExperience } from '../slices/profileSlice';
import { useDispatch, useSelector } from 'react-redux';

const useAddExperience = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.profile);

  const handleAddExperience = async (education) => {
    const resultAction = await dispatch(addExperience(education));
    if (addExperience.fulfilled.match(resultAction)) {
      dispatch(fetchExperience());
      return true;
    } else {
      return false;
    }
  }

  return { handleAddExperience, loading, error };
};

export default useAddExperience;