module.exports = {
    // method of operation
    get: {
        tags: ["Applications"], // operation's tag.
        description: "Get all job applications", // operation's desc.
        summary: "Get all job applications",
        operationId: "getApplications", // unique operation id.
        security: [
            {
                JWT: [],
            },
        ],
        parameters: [], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Applications were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Application", // user model
                        },
                    },
                },
            },
            401: {
                description: "Unauthorized", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error",
                        },
                    },
                },
            },
            500: {
                description: "Internal Server error", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error",
                        },
                    },
                },
            },
        },
    },
};
