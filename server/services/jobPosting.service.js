const {
    getAllJobPostingsDb,
    createJobPostingDb,
    getJobPostingByIdDb,
    getJobPostingByEmployerIdDb,
    updateJobPostingDb,
    deleteJobPostingDb,
} = require("../db/jobPosting.db");
const { ErrorHandler } = require("../helpers/error");

class JobPostingService {
    getAllJobPostings = async (page) => {
        const limit = 100;
        const offset = (page - 1) * limit;
        try {
            return await getAllJobPostingsDb({ limit, offset });
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    createJobPosting = async (data) => {
        try {
            return await createJobPostingDb(data);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getJobPostingById = async (id) => {
        try {
            const jobPosting = await getJobPostingByIdDb(id);
            if (!jobPosting) {
                throw new ErrorHandler(404, "job post not found");
            }
            return jobPosting;
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getJobPostingByEmployerId = async (id) => {
        try {
            const jobPosting = await getJobPostingByEmployerIdDb(id);
            if (!jobPosting) {
                throw new ErrorHandler(404, "job post not found");
            }
            return jobPosting;
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    updateJobPosting = async (data) => {
        try {
            const job_posting = await getJobPostingByIdDb(data.id);
            if (!job_posting) {
                throw new ErrorHandler(400, "job post not found");
            }
            return await updateJobPostingDb(data);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    deleteJobPosting = async (id) => {
        try {
            const job_posting = await getJobPostingByIdDb(id);
            if (!job_posting) {
                throw new ErrorHandler(404, "job post not found");
            }
            return await deleteJobPostingDb(id);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };
}

module.exports = new JobPostingService();