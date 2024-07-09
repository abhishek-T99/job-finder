module.exports = {
    // operation's method
    post: {
        tags: ["Applications"], // operation's tag
        description: "Create a job application", // short desc
        summary: "Create a new job application",
        operationId: "createApplication", // unique operation id
        security: [
            {
                JWT: [],
            },
        ],
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        type: "object", // data type
                        properties: {
                            job_id: {
                                type: "integer", // data-type
                                description: "Job id", // desc
                                example: "1",
                            },
                            resume: {
                                type: "string", // data-type
                                description: "link", // desc
                                example: "https://www.resume.com/uploads/1"
                            },
                            cover_letter: {
                                type: "string",
                                description: "cover letter",
                                example: "This is the cover letter for job application",
                            },
                        },
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            201: {
                description: "Application created successfully", // response desc
            },
            401: {
                description: "Unauthorized", // response desc
            },
            403: {
                description: "Application not created", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};
