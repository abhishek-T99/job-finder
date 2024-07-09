module.exports = {
    // operation's method
    delete: {
        tags: ["Applications"], // operation's tag
        description: "Delete Job Application", // short desc
        summary: "Delete a job application",
        operationId: "deleteApplication", // unique operation id
        parameters: [
            {
                name: "id", // name of the param
                in: "path", // location of the param
                schema: {
                    $ref: "#/components/schemas/id", // data model of the param
                },
                required: true, // Mandatory param
                description: "application_id", // param desc.
            },
        ], // expected params
        security: [
            {
                JWT: [],
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "Job application deleted successfully", // response desc
            },
            401: {
                description: "Unauthorized",
            },
            404: {
                description: "Job application not found"
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};
