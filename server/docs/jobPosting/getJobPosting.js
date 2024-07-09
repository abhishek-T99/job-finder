module.exports = {
    // method of operation
    get: {
        tags: ["Job Postings"], // operation's tag.
        description: "Get a job post", // operation's desc.
        summary: "Get a job post by id",
        operationId: "getJobPosting", // unique operation id.
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
        ], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Job post obtained", // response desc.
            },
            404: {
                description: "Job post not found",
            },
            500: {
                description: "Internal server error", // response desc.
            },
        },
    },
};
