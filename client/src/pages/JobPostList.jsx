import { Card } from "@windmill/react-ui";
import Job from "components/Job";
import Spinner from "components/Spinner";
import { useJob } from "context/JobContext";
import Layout from "layout/Layout";

const JobPostList = () => {
    const { jobs } = useJob();

    if (!jobs) {
        return (
            <>
                <Layout>
                    <Spinner size={100} loading />
                </Layout>
            </>
        );
    }

    return (
        <Layout>
            <div className="container py-20 mx-auto space-y-2">
                <Card className="flex flex-wrap h-full mx-2 border-2">
                    {jobs?.map((job) => (
                        <div
                            className="w-full flex flex-col justify-between sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 px-2 box-border"
                            key={job.job_id}
                        >
                            <Job job={job} />
                        </div>
                    ))}
                </Card>
            </div>
        </Layout>
    );
};

export default JobPostList;