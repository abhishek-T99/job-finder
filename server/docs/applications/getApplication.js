module.exports = {
    // operation's method
    get: {
        tags: ["Applications"], // operation's tag.
        description: "Get a application", // operation's desc.
        summary: "Get job application by id",
        operationId: "getApplication", // unique operation id
        security: [
            {
                JWT: [],
            },
        ],
        parameters: [
            // expected params.
            {
                name: "id", // name of the param
                in: "path", // location of the param
                schema: {
                    $ref: "#/components/schemas/id", // data model of the param
                },
                required: true, // Mandatory param
                description: "Application ID", // param desc.
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "Application is obtained", // response desc.
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
            404: {
                description: "Application is not found", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error", // error data model
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
                            $ref: "#/components/schemas/Error", // error data model
                        },
                    },
                },
            },
        },
    },
};
