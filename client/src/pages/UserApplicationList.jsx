import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHeader,
    TableRow,
} from "@windmill/react-ui";
import { formatCurrency } from "helpers/formatCurrency";
import { formatDate } from "helpers/formatDate";
import Layout from "layout/Layout";
import API from "api/axios.config";
import { useEffect, useState } from "react";
import { AlertTriangle } from "react-feather";
import { Link } from "react-router-dom";

const UserApplicationList = () => {
    const [applications, setApplications] = useState([]);
    const getUserApplications = async () => {
        await API.get("/job-postings/get-user-applications")
            .then(response => {
                setApplications(response.data)
            })
    };

    useEffect(() => {
        getUserApplications()
    }, []);

    if (applications?.length === 0) {
        return (
            <Layout title="Applications">
                <h1 className="my-10 text-center text-4xl font-semibold">Applied Jobs</h1>
                <div className="h-full flex flex-col justify-center items-center">
                    <AlertTriangle size={150} strokeWidth={1.75} />
                    <p>No Job Applications found.</p>
                    <Button tag={Link} to="/">
                        Browse Jobs
                    </Button>
                </div>
            </Layout>
        )
    }

    return (
        <Layout title="Applications">
            <h1 className="my-10 text-center text-4xl font-semibold">Applied Jobs</h1>
            <TableContainer>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Employer</TableCell>
                            <TableCell>Salary</TableCell>
                            <TableCell>Job Type</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Applied Date</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applications?.map((item) => {
                            return (
                                <TableRow key={item.job_id}>
                                    <TableCell>{item.job_title}</TableCell>
                                    <TableCell>{item.job_company}</TableCell>
                                    <TableCell>{item.job_location}</TableCell>
                                    <TableCell>{item.employer}</TableCell>
                                    <TableCell>{formatCurrency(item.job_salary)}</TableCell>
                                    <TableCell>{item.job_type}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>{formatDate(item.applied_date)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}

export default UserApplicationList;