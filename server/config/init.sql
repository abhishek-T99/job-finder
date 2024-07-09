CREATE TABLE public."resetTokens"
(
    id SERIAL NOT NULL,
    email character varying NOT NULL,
    token character varying NOT NULL,
    used boolean DEFAULT false NOT NULL,
    expiration timestamp without time zone,
    PRIMARY KEY (id)
);

CREATE TABLE public.users
(
    user_id SERIAL NOT NULL,
    username character varying(50) UNIQUE NOT NULL,
    email character varying(100) UNIQUE NOT NULL,
    password character varying(200),
    fullname character varying(100) NOT NULL,
    roles character varying(10)[] DEFAULT '{seeker}'::character varying[] NOT NULL,
    address character varying(200),
    city character varying(100),
    state character varying(100),
    country character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

CREATE TABLE public.job_postings
(
    job_id SERIAL NOT NULL,
    employer_id integer NOT NULL,
    title character varying(100) NOT NULL,
    description text NOT NULL,
    requirements text NOT NULL,
    salary real,
    location character varying(100) NOT NULL,
    company character varying(100) NOT NULL,
    job_type character varying(50) NOT NULL CHECK (job_type IN ('full-time', 'part-time', 'freelance')),
    application_deadline date NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (job_id),
    FOREIGN KEY (employer_id) REFERENCES public.users (user_id) ON DELETE CASCADE
);

CREATE TABLE public.applications
(
    application_id SERIAL NOT NULL,
    job_id integer NOT NULL,
    seeker_id integer NOT NULL,
    resume character varying(100) NOT NULL,
    cover_letter character varying(500) NOT NULL,
    status character varying(50) NOT NULL CHECK (status IN ('applied', 'reveiwed', 'sortlisted', 'rejected')) DEFAULT 'applied',
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (application_id),
    FOREIGN KEY (job_id) REFERENCES public.job_postings (job_id) ON DELETE CASCADE,
    FOREIGN KEY (seeker_id) REFERENCES public.users (user_id) ON DELETE CASCADE,
    UNIQUE (job_id, seeker_id)
);


-- -- seed data for creating admin users
-- INSERT INTO public.users (username, email, password, fullname, roles, address, city, state, country)
-- VALUES ('admin1', 'admin1@email.com', '$2b$10$D1zFoELsks6m.XRrZdqzm.jsi2w8pE3o7.uTx4QzDOA6SDxXDZLuO', 'Admin User1', '{admin}', '123 Admin St', 'Admin City', 'Admin State', 'Admin Country');
-- INSERT INTO public.users (username, email, password, fullname, roles, address, city, state, country)
-- VALUES ('admin2', 'admin2@email.com', '$2b$10$D1zFoELsks6m.XRrZdqzm.jsi2w8pE3o7.uTx4QzDOA6SDxXDZLuO', 'Admin User2', '{admin}', '123 Admin St', 'Admin City', 'Admin State', 'Admin Country');
-- INSERT INTO public.users (username, email, password, fullname, roles, address, city, state, country)
-- VALUES ('admin3', 'admin3@email.com', '$2b$10$D1zFoELsks6m.XRrZdqzm.jsi2w8pE3o7.uTx4QzDOA6SDxXDZLuO', 'Admin User3', '{admin}', '123 Admin St', 'Admin City', 'Admin State', 'Admin Country');

-- -- seed data for creating seeker users
-- INSERT INTO public.users (username, email, password, fullname, roles)
-- VALUES ('seeker1', 'seeker1@email.com', '$2b$10$i10z/eFYeD.wCb9zCgTtY.HHg0WFR1Tf7QZpAYgyzzHGc94y6WWfy', 'Seeker User1', '{seeker}');
-- INSERT INTO public.users (username, email, password, fullname, roles)
-- VALUES ('seeker2', 'seeker2@email.com', '$2b$10$i10z/eFYeD.wCb9zCgTtY.HHg0WFR1Tf7QZpAYgyzzHGc94y6WWfy', 'Seeker User2', '{seeker}');
-- INSERT INTO public.users (username, email, password, fullname, roles)
-- VALUES ('seeker3', 'seeker3@email.com', '$2b$10$i10z/eFYeD.wCb9zCgTtY.HHg0WFR1Tf7QZpAYgyzzHGc94y6WWfy', 'Seeker User3', '{seeker}');

-- -- seed data for creating employer users
-- INSERT INTO public.users (username, email, password, fullname, roles)
-- VALUES ('employer1', 'employer1@email.com', '$2b$10$CKPLoZu369FqB9nVvoeUauBekrAHfYX2ExbUAA.LnT8M5lqQ.RprO', 'Employer User1', '{employer}');
-- INSERT INTO public.users (username, email, password, fullname, roles)
-- VALUES ('employer2', 'employer2@email.com', '$2b$10$CKPLoZu369FqB9nVvoeUauBekrAHfYX2ExbUAA.LnT8M5lqQ.RprO', 'Employer User2', '{employer}');
-- INSERT INTO public.users (username, email, password, fullname, roles)
-- VALUES ('employer3', 'employer3@email.com', '$2b$10$CKPLoZu369FqB9nVvoeUauBekrAHfYX2ExbUAA.LnT8M5lqQ.RprO', 'Employer User3', '{employer}');

-- -- seed data for creting job posts
-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (1, 7, 'Frontend Developer', 'ReactJS and NuxtJS', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 20000, 'Kathmandu', 'Coding Byte', 'full-time', '2024-05-26', '2024-05-26 20:51:15.040984');

-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (2, 7, 'Backend Developer', 'ReactJS and NuxtJS', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 30000, 'Kathmandu', 'Coding Byte', 'part-time', '2024-05-26', '2024-05-26 20:51:44.305973');

-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (3, 7, 'UI/UX Designer', 'Figma and Illustrator', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 10000, 'Kathmandu', 'Coding Byte', 'freelance', '2024-07-01', '2024-05-26 20:52:23.261576');

-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (4, 7, 'HR Manager', 'Manage the human resources.', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 10000, 'Kathmandu', 'Coding Byte', 'freelance', '2024-07-01', '2024-05-26 20:52:46.456384');

-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (5, 8, 'Backend Developer', 'NodeJS and FastAPI', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 100000, 'Kathmandu', 'Bit Coding', 'full-time', '2024-07-01', '2024-05-26 20:53:53.877055');

-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (6, 8, 'Frontend Developer', 'React and Vue', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 40000, 'Kathmandu', 'Bit Coding', 'part-time', '2024-07-01', '2024-05-26 20:54:14.364255');

-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (7, 8, 'Mobile App Developer', 'Flutter and Dart', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 40000, 'Kathmandu', 'Bit Coding', 'full-time', '2024-07-01', '2024-05-26 20:54:46.118471');

-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (8, 8, 'Graphics Designer', 'Illustrator and Figma', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 20000, 'Kathmandu', 'Bit Coding', 'freelance', '2024-07-01', '2024-05-26 20:55:33.850914');

-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (9, 9, 'Graphics Designer', 'Illustrator and Pixma', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 20000, 'Bhaktapur', 'Baucha Codes', 'full-time', '2024-07-01', '2024-05-26 20:56:45.053365');

-- INSERT INTO public.job_postings (job_id, employer_id, title, description, requirements, salary, location, company, job_type, application_deadline, created_at) VALUES
-- (10, 9, 'Backend Developer', 'Django REST framework', 'Job requirements are the skills, experiences and qualities an employer deems necessary for a candidate to be considered for a role. Job requirements — also called prerequisites or qualifications — are an important part of any job description and can’t be overlooked by either the employer or prospective employee. For recruiters, job requirements are a helpful pre-selection tool. When written correctly, they can be used to quickly screen applicants and determine preliminary fit for a role. This minimizes the time dedicated to sourcing candidates and it improves the quality and relevancy of your applicant pool.', 60000, 'Bhaktapur', 'Baucha Codes', 'full-time', '2024-07-05', '2024-05-26 20:57:16.592627');
