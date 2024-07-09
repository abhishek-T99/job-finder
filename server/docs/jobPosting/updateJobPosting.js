module.exports = {
    // operation's method
    put: {
        tags: ["Job Postings"], // operation's tag
        description: "Update job post", // short desc
        summary: "Update a job post",
        operationId: "updateJobPosting", // unique operation id
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
                description: "Id of job post to be updated", // short desc.
            },
        ],
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/JobPostUpdate",
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "Job Post updated successfully", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/JobPostUpdate", // user data model
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
