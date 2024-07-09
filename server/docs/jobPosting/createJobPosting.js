module.exports = {
    // operation's method
    post: {
        tags: ["Job Postings"], // operation's tag
        description: "Create Job Posting", // short desc
        summary: "Create job posting",
        operationId: "createJobPosting", // unique operation id
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
                            title: {
                                type: "string", // data-type
                                description: "Job Title", // desc
                                example: "Frontend Developer"
                            },
                            description: {
                                type: "string", // data-type
                                description: "Job Description", // desc
                                example: "ReactJS and NUXTjs"
                            },
                            requirements: {
                                type: "string", // data-type
                                description: "Job Requirements", // desc
                                example: "The requirements of the job are......"
                            },
                            salary: {
                                type: "number", // data-type
                                description: "Salary", // desc
                                example: 50000.00
                            },
                            location: {
                                type: "string", // data-type
                                description: "Location", // desc
                                example: "Kathmandu"
                            },
                            company: {
                                type: "string", // data-type
                                description: "Company", // desc
                                example: "Codeing Byte"
                            },
                            job_type: {
                                type: "string", // data-type
                                description: "part-time, full-time, freelance", // desc
                                example: "full-time"
                            },
                            application_deadline: {
                                type: "string", // data-type
                                format: "date",
                                description: "date", // desc
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
                description: "Job Post created successfully", // response desc
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
