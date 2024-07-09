import Spinner from "components/Spinner";
import Layout from "layout/Layout";
import {
  Login,
  NotFound,
  JobPostList,
  Register,
  Account,
  ResetPassword,
  JobDetails,
  JobApplication,
  UserApplicationList,
  CreateJob,
  EmployerApplication,
  PostedJobs,
  PostedJobDetails,
} from "pages";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "routes/protected.route";

function App() {
  return (
    <Suspense
      fallback={
        <Layout>
          <Spinner size={100} />
        </Layout>
      }
    >
      <Toaster position="top-right" />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Account />} />
          <Route path="/job-postings/:id/apply" element={<JobApplication />} />
          <Route path="/applications" element={<UserApplicationList />} />
          <Route path="/employer-applications" element={<EmployerApplication />} />
          <Route path="/posted-jobs" element={<PostedJobs />} />
          <Route path="/posted-jobs/:id/" element={<PostedJobDetails />} />
          <Route path="/create-job" element={<CreateJob />} />
        </Route>

        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route index element={<JobPostList />} />
        <Route path="/job-postings/:id/" element={<JobDetails />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
