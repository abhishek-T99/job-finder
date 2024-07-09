import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHeader,
    TableRow,
} from "@windmill/react-ui";
import Layout from "layout/Layout";
import API from "api/axios.config";
import { useState, useEffect } from "react";
import { AlertTriangle } from "react-feather";
import { Link } from "react-router-dom";
import { formatDate } from "helpers/formatDate";

const EmployerApplication = () => {
    const [applications, setApplications] = useState([]);
    const getUserApplications = async () => {
        await API.get("/applications/employer-applications")
            .then(response => {
                setApplications(response.data);
            })
    };

    useEffect(() => {
        getUserApplications();
    }, []);

    if (applications?.length === 0) {
        return (
            <Layout title="Applications">
                <h1 className="my-10 text-center text-4xl font-semibold">Job Applications</h1>
                <div className="h-full flex flex-col justify-center items-center">
                    <AlertTriangle size={150} strokeWidth={1.75} />
                    <p>No Job Applications found.</p>
                    <Button tag={Link} to="/">
                        Go Back
                    </Button>
                </div>
            </Layout>
        )
    }

    return (
        <Layout title="Applications">
            <h1 className="my-10 text-center text-4xl font-semibold">Job Applications</h1>
            <TableContainer>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Application ID</TableCell>
                            <TableCell>Job ID</TableCell>
                            <TableCell>Job Title</TableCell>
                            <TableCell>Seeker Name</TableCell>
                            <TableCell>Cover Letter</TableCell>
                            <TableCell>Resume</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Applied Date</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applications?.map((item) => {
                            return (
                                <TableRow key={item.application_id}>
                                    <TableCell>{item.application_id}</TableCell>
                                    <TableCell>{item.job_id}</TableCell>
                                    <TableCell>{item.job_title}</TableCell>
                                    <TableCell>{item.seeker_username}</TableCell>
                                    <TableCell>{item.cover_letter}</TableCell>
                                    <TableCell>{item.resume}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>{formatDate(item.application_created_at)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
};

export default EmployerApplication;
