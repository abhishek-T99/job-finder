module.exports = {
    // operation's method
    post: {
        tags: ["Job Postings"], // operation's tag
        description: "Apply for a job", // short desc
        summary: "Apply for a job",
        operationId: "applyJob", // unique operation id
        parameters: [], // expected params
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
                                description: "Employer's id", // desc
                                example: "1",
                            },
                            resume: {
                                type: "string", // data-type
                                description: "resume link", // desc
                                example: "https://www.resume.com/uploads/1", // example of a title
                            },
                            cover_letter: {
                                type: "string", // data-type
                                description: "cover letter", // desc
                                example: "This is the cover letter.", // example of a title
                            },
                        },
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "Job applied successfully", // response desc
            },
            401: {
                description: "Unauthorized",
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};
