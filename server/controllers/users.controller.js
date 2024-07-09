const userService = require("../services/user.service");
const { ErrorHandler } = require("../helpers/error");
const { hashPassword } = require("../helpers/hashPassword");

const getAllUsers = async (req, res) => {
    const results = await userService.getAllUsers();
    res.status(200).json(results);
};

const createUser = async (req, res) => {
    const { username, password, email, fullname, roles, address, city, state, country } = req.body;
    const hashedPassword = await hashPassword(password);

    const user = await userService.createUser({
        username,
        password: hashedPassword,
        email,
        fullname,
        roles,
        address,
        city,
        state,
        country,
    });

    res.status(201).json({
        status: "success",
        user,
    });
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    if (+id === req.user.id || req.user.roles.includes("admin")) {
        try {
            const user = await userService.getUserById(id);
            return res.status(200).json(user);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, "User not found");
        }
    }
    throw new ErrorHandler(401, "Unauthorized");
};

const getUserProfile = async (req, res) => {
    const { id } = req.user;

    const user = await userService.getUserById(id);

    return res.status(200).json(user);
};

const updateUser = async (req, res) => {
    const { username, email, fullname, address, city, state, country } = req.body;
    if (+req.params.id === req.user.id || req.user.roles.includes("admin")) {
        try {
            const results = await userService.updateUser({
                username,
                email,
                fullname,
                address,
                city,
                state,
                country,
                id: req.params.id,
            });
            return res.status(200).json(results);
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    }
    throw new ErrorHandler(401, "Unauthorized");
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (+id === req.user.id || req.user.roles.includes("admin")) {
        try {
            await userService.deleteUser(id);
            res.status(200).json("User deleted successfully.");
        } catch (error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
    }
    throw new ErrorHandler(401, "Unauthorized");
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserProfile,
};