import { Button, CardBody } from "@windmill/react-ui";
import { Link } from "react-router-dom";
import { formatCurrency } from "../helpers/formatCurrency";
import { Eye } from "react-feather";
import { capitalizeWords } from "../helpers/capitalizeWords";

const PostedJob = ({ job }) => {

    return (
        <Link to={`/posted-jobs/${job.job_id}`}>
            <div className="group">
                <CardBody className="flex flex-col items-stretch bg-gray-100" style={{borderRadius: "10px"}}>
                    <h2 className="title-font text-lg font-medium overflow-ellipsis whitespace-nowrap overflow-hidden">
                        {capitalizeWords(job.title)} - {capitalizeWords(job.location)}
                    </h2>
                    <p className="">Description: {capitalizeWords(job.description)}</p>
                    <p className="">Job Type: {capitalizeWords(job.job_type)}</p>
                    <p className="">Company: {capitalizeWords(job.company)}</p>
                    <p className="">Salary: {formatCurrency(job.salary)}</p>
                    <Button
                        iconLeft={() =>
                            <Eye className="mr-2" />
                        }
                        className="mt-4"
                    >
                        View Job
                    </Button>
                </CardBody>
            </div>
        </Link>
    );
};

export default PostedJob;
