require("dotenv").config();
const nodemailer = require("nodemailer");
const { logger } = require("../utils/logger");
const { ErrorHandler } = require("../helpers/error");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
    try {
        const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN,
        });

        const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    logger.error(err);
                    reject();
                }
                resolve(token);
            });
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.SMTP_USER,
                accessToken,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
            },
        });
        return transporter;
    } catch (err) {
        return err;
    }
};

const url =
    process.env.NODE_ENV === "production"
        ? "https://job-seeker.netlify.app"
        : "http://localhost:3000";

const signupMail = async (to) => {
    try {
        const message = {
            from: "jobseeker@email.com",
            to,
            subject: "Welcome to Jobseeker",
            html: `
        <p><a href=${url}>Continue with Jobseeker</a></p>
      `,
        };

        // const emailTransporter = await createTransporter();
        // await emailTransporter.sendMail(message);
        logger.info(message)
    } catch (error) {
        logger.error(error);
    }
};

const forgotPasswordMail = async (token, email) => {
    const reset_url = `${url}/reset-password?token=${encodeURIComponent(token)}&email=${email}`
    try {
        const message = {
            to: email,
            subject: "Forgot Password",
            html: `
        <p>To reset your password, please click the link below.
          <a 
            href="${url}/reset-password?token=${encodeURIComponent(
                token
            )}&email=${email}"
          >
          <br/>
          Reset Password
          </a></p>
        <p>
          <b>Note that this link will expire in the next one(1) hour.</b>
        </p>`,
        };

        // const emailTransporter = await createTransporter();
        // return await emailTransporter.sendMail(message);
        logger.info(reset_url);
        logger.info(message);
    } catch (error) {
        logger.error(error);
        throw new ErrorHandler(500, error.message);
    }
};

const resetPasswordMail = async (email) => {
    try {
        const message = {
            from: process.env.SMTP_FROM,
            to: email,
            subject: "Password Reset Successful",
            html: "<p>Your password has been changed successfully.</p>",
        };

        // const emailTransporter = await createTransporter();
        // await emailTransporter.sendMail(message);
        logger.info(message);
    } catch (error) {
        logger.error(error);
        throw new ErrorHandler(500, error.message);
    }
};

module.exports = {
    signupMail,
    resetPasswordMail,
    forgotPasswordMail,
    createTransporter,
};
