module.exports = {
    // operation's method
    delete: {
        tags: ["Job Postings"], // operation's tag
        description: "Delete Job Postings", // short desc
        summary: "Delete a job posting",
        operationId: "deleteJobPosting", // unique operation id
        parameters: [
            {
                name: "id", // name of the param
                in: "path", // location of the param
                schema: {
                    $ref: "#/components/schemas/id", // data model of the param
                },
                required: true, // Mandatory param
                description: "job_id", // param desc.
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
            201: {
                description: "Job Post deleted successfully", // response desc
            },
            401: {
                description: "Unauthorized",
            },
            404: {
                description: "Job Post not found"
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};
