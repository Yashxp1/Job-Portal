import LandingPage from './pages/LandingPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Job from './pages/Job';
import JobListing from './pages/JobListing';
import PostJob from './pages/PostJob';
import SavedJobs from './pages/SavedJobs';
import MyJob from './pages/MyJob';

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/onboarding',
        element: <Onboarding />,
      },
      {
        path: '/jobs',
        element: <JobListing />,
      },
      {
        path: '/job/:id',
        element: <Job />,
      },
      {
        path: '/post-job',
        element: <PostJob />,
      },
      {
        path: '/saved-job',
        element: <SavedJobs />,
      },
      {
        path: '/my-jobs',
        element: <MyJob />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
