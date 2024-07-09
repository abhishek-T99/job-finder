const applicationService = require("../services/application.service");
const { ErrorHandler } = require("../helpers/error");

const getAllApplicaitons = async (req, res) => {
    if (req.user.roles.includes("admin")) {
        try {
            const { page = 1 } = req.query;
            const applications = await applicationService.getAllApplications(page);
            res.status(200).json(applications);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, "Applications not found");
        }
    }
    else {
        throw new ErrorHandler(401, "Unauthorized");
    }
};

const getApplication = async (req, res) => {
    const { id } = req.params;
    try {
        const application = await applicationService.getApplicationById(id);
        return res.status(200).json(application);
    } catch (error) {
        throw new ErrorHandler(error.statusCode, "Application not found");
    }
};

const getUserApplicationDetails = async (req, res) => {
    if (req.user.roles.includes("seeker")) {
        try {
            const applications = await applicationService.getUserApplicationDetails(req.user.id);
            return res.status(200).json(applications);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, "Applications not found");
        }
    }
    throw new ErrorHandler(401, "Unauthorized");
}

const getEmployerApplications = async (req, res) => {
    if (req.user.roles.includes("employer")) {
        try {
            const applications = await applicationService.getEmployerApplications(req.user.id);
            return res.status(200).json(applications);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, "Application not found");
        }
    }
    throw new ErrorHandler(401, "Unauthorized");
}

const createApplication = async (req, res) => {
    if (req.user.roles.includes("seeker")) {
        try {
            const { job_id, resume, cover_letter } = req.body;
            const applicaiton = await applicationService.createApplication({
                job_id,
                seeker_id: req.user.id,
                resume,
                cover_letter,
            });
            res.status(200).json(applicaiton);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, "Application not created");
        }
    }
    else {
        throw new ErrorHandler(401, "seeker role required");
    }
};

const updateApplication = async (req, res) => {
    const { resume, cover_letter } = req.body;
    const { id } = req.params;
    try {
        const updateApplication = await applicationService.updateApplication({
            resume,
            cover_letter,
            status: "applied",
            id,
        })
        res.status(200).json(updateApplication);
    } catch (error) {
        throw new ErrorHandler(error.statusCode, "Application not found");
    }
};

const deleteApplication = async (req, res) => {
    const { id } = req.params;
    if (+id === req.user.id || req.user.roles.includes("admin")) {
        try {
            await applicationService.deleteApplicaiton(id);
            res.status(200).json("Application deleted successfully.");
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    }
    else {
        throw new ErrorHandler(401, "Unauthorized");
    }
};

module.exports = {
    getAllApplicaitons,
    getApplication,
    getUserApplicationDetails,
    getEmployerApplications,
    createApplication,
    updateApplication,
    deleteApplication
}