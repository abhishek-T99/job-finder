const {
    getAllApplicationsDb,
    getApplicationByIdDb,
    getEmployerApplicationsDb,
    createApplicationDb,
    updateApplicationDb,
    deleteApplicationDb,
    getUserApplicationDetailsDb,
} = require("../db/application.db");
const { ErrorHandler } = require("../helpers/error");

class ApplicationService {
    getAllApplications = async (page) => {
        const limit = 100;
        const offset = (page - 1) * limit;
        try {
            return await getAllApplicationsDb({ limit, offset });
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getApplicationById = async (id) => {
        try {
            const application = await getApplicationByIdDb(id);
            if (!application) {
                throw new ErrorHandler(404, "application not found");
            }
            return application;
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    getEmployerApplications = async (id) => {
        try {
            const applications = await getEmployerApplicationsDb(id);
            if (!applications) {
                throw new ErrorHandler(404, "applications not found");
            }
            return applications;
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    }

    getUserApplicationDetails = async (id) => {
        try {
            return await getUserApplicationDetailsDb(id);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    }

    createApplication = async (data) => {
        try {
            return await createApplicationDb(data);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    updateApplication = async (data) => {
        try {
            const application = await getApplicationByIdDb(data.id);
            if (!application) {
                throw new ErrorHandler(404, "application not found");
            }
            return await updateApplicationDb(data);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

    deleteApplicaiton = async (id) => {
        try {
            const application = await getApplicationByIdDb(id);
            if (!application) {
                throw new ErrorHandler(404, "application not found");
            }
            return await deleteApplicationDb(id);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    };

}

module.exports = new ApplicationService()