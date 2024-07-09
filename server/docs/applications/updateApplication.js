module.exports = {
    // operation's method
    put: {
        tags: ["Applications"], // operation's tag
        description: "Update job application", // short desc
        summary: "Update a job application",
        operationId: "updateApplication", // unique operation id
        security: [
            {
                JWT: [],
            },
        ],
        parameters: [
            // expected params
            {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                    $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "application id", // short desc.
            },
        ],
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ApplicationUpdate",
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "Job application updated successfully", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Application", // user data model
                        },
                    },
                },
            },
            // response code
            403: {
                description: "Data exists already", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error", // user data model
                        },
                    },
                },
            },
            // response code
            500: {
                description: "Server error", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error", // user data model
                        },
                    },
                },
            },
        },
    },
};
