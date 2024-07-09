const router = require("express").Router();

const users = require("./users")
const auth = require("./auth");
const jobPosting = require("./jobPosting");
const application = require("./applications");
const swaggerUi = require("swagger-ui-express");
const docs = require("../docs");

router.use("/auth", auth);
router.use("/users", users);
router.use("/job-postings", jobPosting);
router.use("/applications", application);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));

module.exports = router;
