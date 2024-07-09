module.exports = {
    // method of operation
    get: {
        tags: ["Applications"], // operation's tag.
        description: "Get employer's applications", // operation's desc.
        summary: "Get employer's job applications",
        operationId: "getEmployerApplications", // unique operation id.
        security: [
            {
                JWT: [],
            },
        ],
        parameters: [],
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
