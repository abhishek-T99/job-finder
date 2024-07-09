const auth = require("./auth");
const users = require("./users");
const jobPosting = require("./jobPosting");
const applications = require("./applications")

module.exports = {
  paths: {
    ...auth,
    ...users,
    ...jobPosting,
    ...applications,
  },
};
