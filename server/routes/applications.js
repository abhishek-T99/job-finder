const router = require("express").Router();
const {
    getAllApplicaitons,
    getApplication,
    getEmployerApplications,
    updateApplication,
    deleteApplication,
    createApplication,

} = require("../controllers/application.controller");

const verifyAdmin = require("../middleware/verifyAdmin");
// const verifyEmployer = require("../middleware/verifyEmployer");
const verifyToken = require("../middleware/verifyToken");

router
    .route("/")
    .get(verifyToken, verifyAdmin, getAllApplicaitons)
    .post(verifyToken, createApplication)

router
    .route("/employer-applications")
    .get(verifyToken, getEmployerApplications)

router
    .route("/:id")
    .get(verifyToken, getApplication)
    .delete(verifyToken, verifyAdmin, deleteApplication)
    .put(verifyToken, updateApplication)

module.exports = router;