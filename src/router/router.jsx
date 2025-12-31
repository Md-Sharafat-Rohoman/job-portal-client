import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/Home/AddJob/AddJob";
import MyPost from "../pages/MyPost/MyPost";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/signIn',
        Component: SignIn
      },
      {
        path: '/jobs/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute> <JobApply></JobApply> </PrivateRoute>
      },
      {
        path: 'myApplications',
        element: <PrivateRoute> <MyApplications></MyApplications> </PrivateRoute>
      },
      {
        path: 'addJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      }, 
      {
        path: 'myPost',
        element: <PrivateRoute><MyPost></MyPost></PrivateRoute>
      }
    ]
  },
]);

export default router;