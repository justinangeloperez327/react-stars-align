import { useDispatch, useSelector } from 'react-redux';

import { getAppliedJobs } from '../slices/jobsSlice';
import { useEffect } from 'react';

const useAppliedJobs = (query = '') => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(getAppliedJobs(query));
    }, [dispatch, query]);

    return { jobs, loading, error };
};

export default useAppliedJobs;