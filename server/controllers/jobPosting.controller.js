const { ErrorHandler } = require("../helpers/error");
const jobPostingService = require("../services/jobPosting.service");

const getAllJobPostings = async (req, res) => {
    const { page = 1 } = req.query;
    const job_postings = await jobPostingService.getAllJobPostings(page);
    res.status(200).json(job_postings);
};

const addJobPosting = async (req, res) => {
    try {
        const {title, description, requirements, salary, location, company, job_type, application_deadline} = req.body;
        const jobPost = await jobPostingService.createJobPosting({
            employer_id: req.user.id,
            title,
            description,
            requirements,
            salary,
            location,
            company,
            job_type,
            application_deadline,
        });
        res.status(200).json(jobPost);
    } catch (error) {
        throw new ErrorHandler(error.statusCode, "Job Post not created")
    }
};

const getJobPosting = async (req, res) => {
    const { id } = req.params;
    const jobPosting = await jobPostingService.getJobPostingById(id);
    res.status(200).json(jobPosting)
};

const getJobPostingByEmployerId = async (req, res) => {
    const jobPosting = await jobPostingService.getJobPostingByEmployerId(req.user.id);
    res.status(200).json(jobPosting);
};

const getJobPostingByTitle = async (req, res) => {
    const jobPostings = await jobPostingService.getJobPostingByTitle(req.params);
    res.status(200).json(jobPostings);
};

const getJobPostingByJobType = async (req, res) => {
    const jobPostings = await jobPostingService.getJobPostingByJobType(req.params);
    res.status(200).json(jobPostings);
};

const getJobPostingsByLocation = async (req, res) => {
    const jobPostings = await jobPostingService.getJobPostingsByLocation(req.params);
    res.status(200).json(jobPostings);
};

const updateJobPosting = async (req, res) => {
    const { title, description, requirements, salary, location, company, job_type, application_deadline } = req.body;
    const { id } = req.params;

    const updateJobPosting = await jobPostingService.updateJobPosting({
        title,
        description,
        requirements,
        salary,
        location,
        company,
        job_type,
        application_deadline,
        id,
    })
    res.status(200).json(updateJobPosting);
};

const deleteJobPosting = async (req, res) => {
    const { id } = req.params;
    const deleteJobPosting = await jobPostingService.deleteJobPosting(id);
    res.status(201).json(deleteJobPosting);
};

module.exports = {
    getAllJobPostings,
    addJobPosting,
    getJobPosting,
    getJobPostingByEmployerId,
    getJobPostingByTitle,
    getJobPostingByJobType,
    getJobPostingsByLocation,
    updateJobPosting,
    deleteJobPosting,
}