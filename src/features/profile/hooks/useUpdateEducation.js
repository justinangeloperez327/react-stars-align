import { fetchEducation, updateEducation } from '../slices/profileSlice';
import { useDispatch, useSelector } from 'react-redux';

const useUpdateEducation = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.profile);

  const handleUpdateEducation = (education) => {
    const resultAction = dispatch(updateEducation(education));
    if (updateEducation.fulfilled.match(resultAction)) {
      dispatch(fetchEducation());
      return true;
    } else {
      return false;
    }
  }

  return { handleUpdateEducation, loading, error };
};

export default useUpdateEducation;