import { useDispatch, useSelector } from 'react-redux';

import { getDashboardData } from '../slices/dashboardSlice';
import { useEffect } from 'react';

const useDashboard = () => {
  const dispatch = useDispatch();
  const { totalJobs, totalActiveJobs, totalCloseJobs, totalApplications, totalViewedApplications, totalPendingApplications, loading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  return { totalJobs, totalActiveJobs, totalCloseJobs, totalApplications, totalViewedApplications, totalPendingApplications, loading, error };
};

export default useDashboard;