import { Button } from "@windmill/react-ui";
import { useUser } from "context/UserContext";
import { formatCurrency } from "helpers/formatCurrency";
import { formatDate } from "helpers/formatDate";
import Layout from "layout/Layout";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import jobService from "services/jobs.service";

const JobDetails = () => {
  const { id } = useParams();
  const { userData } = useUser()
  const [job, setJob] = useState(null);
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const { data: job } = await jobService.getJob(id);
        setJob(job);
      } catch (error) {
        return navigate("/404", {
          replace: true,
        });
      } finally {
        setIsFetching(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <Layout loading={isFetching} title={job?.title}>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-3/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-3xl title-font font-medium mb-1">{job?.title}</h1>
              <p className="leading-relaxed font-semibold text-xl">
                {job?.company}
              </p>
              <p className="pb-4 mt-2 font-bold border-b-2 border-gray-800">
                {job?.description}
              </p>
              <p className="mt-2">
                <span className="title-font font-semibold">Location:</span> {job?.location}
              </p>
              <p className="">
                <span className="title-font font-semibold">Job Type:</span> {job?.job_type}
              </p>
              <p className="">
                <span className="title-font font-semibold">Salary:</span> {formatCurrency(job?.salary)}
              </p>
              <p className="">
                <span className="title-font font-semibold">Deadline:</span> {formatDate(job?.application_deadline)}
              </p>
              <p className="text-justify">
                <span className="title-font font-semibold">Requirements:</span> {job?.requirements}
              </p>
              <div className="flex mt-4 justify-between">
                {!userData?.roles?.includes("employer") && (
                  <Link to={`/job-postings/${job?.job_id}/apply`}>
                  <Button
                    className="border-0 focus:outline-none rounded"
                  >
                    Apply Now
                  </Button>
                </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JobDetails;
