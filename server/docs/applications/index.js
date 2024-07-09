const createApplication = require("./createApplication");
const updateApplication = require("./updateApplication");
const getApplication = require("./getApplication");
const getApplications = require("./getApplications");
const deleteApplication = require("./deleteApplicaiton");
const getEmployerApplications = require("./getEmployerApplications");

module.exports = {
    "/applications": {
        ...getApplications,
        ...createApplication,
    },
    "/applications/employer-applications": {
        ...getEmployerApplications,
    },
    "/applications/{id}": {
        ...getApplication,
        ...updateApplication,
        ...deleteApplication,
    },
};
