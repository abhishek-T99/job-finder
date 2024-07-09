import { createContext, useContext, useEffect, useState } from "react";
import jobService from 'services/jobs.service';

const JobContext = createContext();

const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        jobService.getJobs(page).then((response) => {
            setJobs(response.data);
            setIsLoading(false);
        });
    }, [page]);

    return (
        <JobContext.Provider
            value={{ jobs, setJobs, isLoading, setIsLoading, page, setPage }}
        >
            {children}
        </JobContext.Provider>
    );
};

const useJob = () => {
    const context = useContext(JobContext);
    if (context === undefined) {
        throw new Error("useJob must be used within a JobProvider");
    }
    return context;
};

export { JobContext, JobProvider, useJob };
