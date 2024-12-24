import { Route, Routes } from 'react-router';

import AboutPage from './pages/AboutPage';
import ApplicationPage from './pages/ApplicationPage';
import ApplicationSuccessPage from './pages/ApplicationSuccessPage';
import AppliedJobsPage from './pages/employee/AppliedJobsPage';
import AuthLayout from './layouts/AuthLayout';
import BackgroundLayout from './layouts/BackgroundLayout';
import CompaniesPage from './pages/CompaniesPage';
import DashboardLayout from './layouts/DashboardLayout';
import DefaultLayout from './layouts/DefaultLayout';
import EmployerApplicationPage from './pages/employer-dashboard/applications/ApplicationPage';
import EmployerApplicationsLayout from './pages/employer-dashboard/applications/ApplicationsLayout';
import EmployerApplicationsPage from './pages/employer-dashboard/applications/ApplicationsPage';
import EmployerDashboardPage from './pages/employer-dashboard/DashboardPage';
import EmployerJobApplicationsPage from './pages/employer-dashboard/jobs/JobApplicationsPage';
import EmployerJobCreate from './pages/employer-dashboard/jobs/JobCreatePage';
import EmployerJobEdit from './pages/employer-dashboard/jobs/JobEditPage';
import EmployerJobsLayout from './pages/employer-dashboard/jobs/JobsLayout';
import EmployerJobsPage from './pages/employer-dashboard/jobs/JobsPage';
import EmployerProfilePage from './pages/employer-dashboard/profile/ProfilePage';
import EmployerRoute from './routes/EmployerRoute';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
import RegisterEmployerPage from './pages/RegisterEmployerPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="companies" element={<CompaniesPage />} />
            <Route path="jobs/:jobId/details" element={<JobPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="applied-jobs" element={<AppliedJobsPage />} />
            <Route path="jobs/:jobId/application" element={<ApplicationPage />} />
            <Route path="jobs/:jobId/application/:applicationId/success" element={<ApplicationSuccessPage />} />
          </Route>
        </Route>


        <Route element={<EmployerRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="employer/dashboard" element={<EmployerDashboardPage />} />
            <Route path="employer/profile" element={<EmployerProfilePage />} />

            <Route path="employer/jobs" element={<EmployerJobsLayout />}>
              <Route index element={<EmployerJobsPage />} />
              <Route path="create" element={<EmployerJobCreate />} />
              <Route path=":jobId/edit" element={<EmployerJobEdit />} />
              <Route path=":jobId/applications" element={<EmployerJobApplicationsPage />} />
            </Route>

            <Route path="employer/applications" element={<EmployerApplicationsLayout />}>
              <Route index element={<EmployerApplicationsPage />} />
              <Route path=":applicationId/view" element={<EmployerApplicationPage />} />
            </Route>

          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/register-employer" element={<RegisterEmployerPage />} />
          </Route>
        </Route>

        <Route element={<BackgroundLayout />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>

    </div >
  );
}

export default App;
