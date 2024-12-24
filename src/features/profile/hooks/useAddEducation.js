import { addEducation, fetchEducation } from '../slices/profileSlice';
import { useDispatch, useSelector } from 'react-redux';

const useAddEducation = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.profile);

  const handleAddEducation = (education) => {
    const resultAction = dispatch(addEducation(education));
    if (addEducation.fulfilled.match(resultAction)) {
      dispatch(fetchEducation());
      return true;
    } else {
      return false;
    }
  }

  return { handleAddEducation, loading, error };
};

export default useAddEducation;