module.exports = {
    // method of operation
    get: {
        tags: ["Job Postings"], // operation's tag.
        description: "Get job posts", // operation's desc.
        summary: "Get all job posts",
        operationId: "getJobPostings", // unique operation id.
        parameters: [],
        // expected responses
        responses: {
            // response code
            200: {
                description: "Job Posts obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/JobPostingsList",
                            },
                        },
                    },
                },
            },
            500: {
                description: "Internal server error", // response desc.
            },
        },
    },
};
