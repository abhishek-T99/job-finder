module.exports = {
    // method of operation
    get: {
        tags: ["Job Postings"], // operation's tag.
        description: "Get user applications", // operation's desc.
        summary: "Get user's applications.",
        operationId: "getUserApplications", // unique operation id.
        security: [
            {
                JWT: [],
            },
        ],
        parameters: [],
        // expected responses
        responses: {
            // response code
            200: {
                description: "User applications obtained", // response desc.
                // content: {
                //     // content-type
                //     "application/json": {
                //         schema: {
                //             type: "array",
                //             items: {
                //                 $ref: "#/components/schemas/JobPostingsList",
                //             },
                //         },
                //     },
                // },
            },
            500: {
                description: "Internal server error", // response desc.
            },
        },
    },
};
