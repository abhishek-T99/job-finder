const createJobPosting = require("./createJobPosting");
const deleteJobPosting = require("./deleteJobPosting");
const getJobPosting = require("./getJobPosting");
const getJobPostings = require("./getJobPostings");
const updateJobPosting = require("./updateJobPosting");
const applyJob = require("./applyJob");
const getUserApplications = require('./getUserApplications');
const getJobPostingByEmployer = require('./getJobPostingByEmployer');

module.exports = {
    "/job-postings": {
        ...getJobPostings,
        ...createJobPosting,
    },
    "/job-postings/get-posted-jobs": {
        ...getJobPostingByEmployer,
    },
    "/job-postings/apply": {
        ...applyJob,
    },
    "/job-postings/get-user-applications": {
        ...getUserApplications,
    },
    "/job-postings/{id}": {
        ...getJobPosting,
        ...updateJobPosting,
        ...deleteJobPosting,
    }
}