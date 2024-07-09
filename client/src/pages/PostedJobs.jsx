import { Card, Button} from "@windmill/react-ui";
import PostedJob from "components/PostedJob";
import API from "api/axios.config";
import { useUser } from "context/UserContext";
import { AlertTriangle } from "react-feather";
import Layout from "layout/Layout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostedJobs = () => {
    const { userData } = useUser();
    const [jobPost, setJobPost] = useState([]);

    const getPostedJobs = async () => {
        await API.get("/job-postings/get-posted-jobs")
            .then(response => {
                setJobPost(response.data);
            })
    };

    useEffect(() => {
        getPostedJobs();
    }, []);

    if (jobPost?.length === 0) {
        return (
            <Layout title="Posted Jobs">
                <h1 className="my-10 text-center text-4xl font-semibold">Job Posts</h1>
                <div className="h-full flex flex-col justify-center items-center">
                    <AlertTriangle size={150} strokeWidth={1.75} />
                    <p>No Job Posts found.</p>
                    <Button tag={Link} to="/create-job">
                        Create Job Post
                    </Button>
                </div>
            </Layout>
        )
    }

    if (userData?.roles?.includes("employer")) {
        return (
            <Layout>
                <h1 className="mt-4 text-center text-4xl font-semibold">Job Posts</h1>
                <div className="container py-20 mx-auto space-y-2">
                    <Card className="flex flex-wrap h-full mx-2 border-2">
                        {jobPost?.map((job_post) => (
                            <div
                                className="w-full flex flex-col justify-between sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 px-2 box-border"
                                key={job_post.job_id}
                            >
                                <PostedJob job={job_post} />
                            </div>
                        ))}
                    </Card>
                </div>
            </Layout>
        );
    } else {
        return (
            <Layout>
                <h1>No Job Posts</h1>
            </Layout>
        );
    };
};

export default PostedJobs;
