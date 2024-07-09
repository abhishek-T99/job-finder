const { ErrorHandler } = require("../helpers/error");

module.exports = (req, res, next) => {
  const { roles } = req.user;
  if (roles && roles.includes("employer")) {
    req.user = {
      ...req.user,
      roles,
    };
    return next();
  } else {
    throw new ErrorHandler(401, "require employer role");
  }
};
