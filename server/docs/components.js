module.exports = {
    components: {
        schemas: {
            // id model
            id: {
                type: "number", // data type
                description: "An id of a model", // desc
                example: 2, // example of an id
            },
            User: {
                type: "object", // data type
                properties: {
                    user_id: {
                        type: "number", // data-type
                        description: "User identification number", // desc
                        example: "23", // example of an id
                    },
                    fullname: {
                        type: "string", // data-type
                        description: "User's fullname", // desc
                        example: "John Doe", // example of a title
                    },
                    email: {
                        type: "string", // data-type
                        description: "User's email", // desc
                        example: "user@email.com", // example of a title
                    },
                    roles: {
                        type: "array", // data-type
                        items: {
                            type: "string",
                            enum: ["admin", "seeker", "employer"],
                            default: "seeker",
                        },
                        description: "User's roles", // desc
                        example: ["admin"], // example of a title
                    },
                    username: {
                        type: "string", // data-type
                        description: "User's username", // desc
                        example: "JohnD", // example of a title
                    },
                    address: {
                        type: "string", // data type
                        description: "User's address", // desc
                        example: "317  Lang Avenue", // example of a completed value
                    },
                    city: {
                        type: "string", // data type
                        description: "User's address city", // desc
                        example: "Portage", // example of a completed value
                    },
                    state: {
                        type: "string", // data type
                        description: "State name", // desc
                        example: "Utah", // example of a completed value
                    },
                    country: {
                        type: "string", // data type
                        description: "Country name", // desc
                        example: "UK", // example of a completed value
                    },
                },
            },
            UserCreate: {
                type: "object", // data type
                properties: {
                    fullname: {
                        type: "string", // data-type
                        description: "User's fullname", // desc
                        example: "John Doe", // example of a title
                    },
                    email: {
                        type: "string", // data-type
                        description: "User's email", // desc
                        example: "johndoe@email.com", // example of a title
                    },
                    roles: {
                        type: "array", // data-type
                        items: {
                            type: "string",
                            enum: ["admin", "seeker", "employer"],
                            default: "seeker",
                        },
                        description: "User's roles", // desc
                        example: ["admin"], // example of a title
                    },
                    username: {
                        type: "string", // data-type
                        description: "User's username", // desc
                        example: "JohnD", // example of a title
                    },
                    password: {
                        type: "string", // data-type
                        description: "User's password", // desc
                        example: "Password123", // example of a title
                    },
                    address: {
                        type: "string", // data type
                        description: "User's address", // desc
                        example: "317  Lang Avenue", // example of a completed value
                    },
                    city: {
                        type: "string", // data type
                        description: "User's address city", // desc
                        example: "Portage", // example of a completed value
                    },
                    state: {
                        type: "string", // data type
                        description: "State name", // desc
                        example: "Utah", // example of a completed value
                    },
                    country: {
                        type: "string", // data type
                        description: "Country name", // desc
                        example: "UK", // example of a completed value
                    },
                },
            },
            UserUpdate: {
                type: "object", // data type
                properties: {
                    fullname: {
                        type: "string", // data-type
                        description: "User's fullname", // desc
                        example: "John Doe", // example of a title
                    },
                    email: {
                        type: "string", // data-type
                        description: "User's email", // desc
                        example: "johndoe@email.com", // example of a title
                    },
                    username: {
                        type: "string", // data-type
                        description: "User's username", // desc
                        example: "JohnD", // example of a title
                    },
                    address: {
                        type: "string", // data type
                        description: "User's address", // desc
                        example: "317  Lang Avenue", // example of a completed value
                    },
                    city: {
                        type: "string", // data type
                        description: "User's address city", // desc
                        example: "Portage", // example of a completed value
                    },
                    state: {
                        type: "string", // data type
                        description: "State name", // desc
                        example: "Utah", // example of a completed value
                    },
                    country: {
                        type: "string", // data type
                        description: "Country name", // desc
                        example: "UK", // example of a completed value
                    },
                },
            },
            // login input model
            LoginInput: {
                type: "object", // data type
                properties: {
                    email: {
                        type: "string", // data type
                        example: "user@email.com", // example of a title
                    },
                    password: {
                        type: "string",
                        example: "password123",
                    },
                },
            },
            LoginResponse: {
                type: "object", // data type
                properties: {
                    token: {
                        type: "string", // data type
                        example:
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInJvbGVzIjpbImN1c3RvbWVyIl0sImNhcnRfaWQiOjE0LCJpYXQiOjE2MjIyODkwMDksImV4cCI6MTYyMjI4OTA2OX0.Y0XarrAfQVR7we-s5mZvBN3DqcjW08-_QmS1Z0W9bpI", // example of a title
                    },
                    user: {
                        type: "object",
                        properties: {
                            user_id: {
                                type: "integer",
                            },
                            fullname: {
                                type: "string",
                            },
                            username: {
                                type: "string",
                            },
                        },
                    },
                },
            },
            SignupInput: {
                type: "object", // data type
                properties: {
                    email: {
                        type: "string",
                    },
                    fullname: {
                        type: "string",
                    },
                    roles: {
                        type: "array", // data-type
                        items: {
                            type: "string",
                            enum: ["admin", "employer", "seeker"],
                            default: "seeker",
                        },
                        description: "User's roles", // desc
                        example: ["seeker"], // example of a title
                    },
                    username: {
                        type: "string",
                    },
                    password: {
                        type: "string",
                    },
                },
            },
            JobPostingsList: {
                type: "object", // data type
                properties: {
                    job_id: {
                        type: "integer", // data-type
                        description: "job_id", // desc
                        example: "1",
                    },
                    title: {
                        type: "string", // data-type
                        description: "Job Title", // desc
                        example: "Frontend Developer"
                    },
                    description: {
                        type: "string", // data-type
                        description: "Job Description", // desc
                        example: "ReactJS and NUXTjs"
                    },
                    requirements: {
                        type: "string", // data-type
                        description: "Job Requirements", // desc
                        example: "The requirements of the job are......"
                    },
                    salary: {
                        type: "number", // data-type
                        description: "Salary", // desc
                        example: 50000.00
                    },
                    location: {
                        type: "string", // data-type
                        description: "Location", // desc
                        example: "Kathmandu"
                    },
                    job_type: {
                        type: "string", // data-type
                        description: "part-time, full-time, freelance", // desc
                        example: "full-time"
                    },
                    application_deadline: {
                        type: "string", // data-type
                        format: "date",
                        description: "date", // desc
                    },
                },
            },
            JobPostUpdate: {
                type: "object", // data type
                properties: {
                    title: {
                        type: "string", // data-type
                        description: "Job Title", // desc
                        example: "Backend Developer", // example of a title
                    },
                    description: {
                        type: "string", // data-type
                        description: "Job Description", // desc
                        example: "Django, FastAPI, Flask", // example of a title
                    },
                    requirements: {
                        type: "string", // data-type
                        description: "Job's requirements", // desc
                        example: "This job requires ............", // example of a title
                    },
                    salary: {
                        type: "number", // data type
                        description: "Job's salary", // desc
                        example: 20000.00, // example of a completed value
                    },
                    location: {
                        type: "string", // data type
                        description: "Job's location", // desc
                        example: "Kathmandu", // example of a completed value
                    },
                    company: {
                        type: "string", // data type
                        description: "company", // desc
                        example: "Byte Coding", // example of a completed value
                    },
                    job_type: {
                        type: "string", // data type
                        description: "Job type", // desc
                        example: "full-time", // example of a completed value
                    },
                    application_deadline: {
                        type: "string", // data type
                        format: "date",
                        description: "Job post's deadline", // desc
                        example: "2024-7-14", // example of a completed value
                    },
                },
            },
            Application: {
                type: "object", // data type
                properties: {
                    application_id: {
                        type: "string", // data-type
                        description: "applicaiton id", // desc
                        example: "1", // example of a title
                    },
                    job_id: {
                        type: "string", // data-type
                        description: "job id", // desc
                        example: "1", // example of a title
                    },
                    seeker_id: {
                        type: "string", // data-type
                        description: "seeker id", // desc
                        example: "1", // example of a title
                    },
                    resume: {
                        type: "string", // data-type
                        description: "resume link", // desc
                        example: "https://www.resume.com/uploads/1", // example of a title
                    },
                    cover_letter: {
                        type: "string", // data-type
                        description: "cover letter", // desc
                        example: "This is the cover letter.", // example of a title
                    },
                    status: {
                        type: "string", // data-type
                        description: "status", // desc
                        example: "applied", // example of a title
                    },
                },
            },
            ApplicationUpdate: {
                type: "object",
                properties: {
                    resume: {
                        type: "string", // data-type
                        description: "resume link", // desc
                        example: "https://www.resume.com/uploads/1", // example of a title
                    },
                    cover_letter: {
                        type: "string", // data-type
                        description: "cover letter", // desc
                        example: "This is the cover letter.", // example of a title
                    },
                }
            },
            // error model
            Error: {
                type: "object", //data type
                properties: {
                    message: {
                        type: "string", // data type
                        description: "Error message", // desc
                        example: "Not found", // example of an error message
                    },
                    statusCode: {
                        type: "number", // data type
                        description: "Error internal code", // desc
                        example: 500, // example of an error internal code
                    },
                    status: {
                        type: "string",
                        description: "error status",
                        example: "error",
                    },
                },
            },
        },
        securitySchemes: {
            JWT: {
                type: "apiKey",
                name: "auth-token",
                in: "header",
            },
            cookie: {
                type: "apiKey",
                in: "cookie",
                name: "refreshToken",
            },
        },
    },
};
