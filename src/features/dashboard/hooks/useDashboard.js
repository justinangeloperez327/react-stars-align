import { useDispatch, useSelector } from 'react-redux';

import { getDashboardData } from '../slices/dashboardSlice';
import { useEffect } from 'react';

const useDashboard = () => {
  const dispatch = useDispatch();
  const { totalJobs, totalActiveJobs, totalCloseJobs, totalApplications, totalAccepted, totalRejected, loading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  return { totalJobs, totalActiveJobs, totalCloseJobs, totalApplications, totalAccepted, totalRejected, loading, error };
};

export default useDashboard;