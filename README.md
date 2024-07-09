
# JOB BOARD APPLICATION

A full-stack job finding application built using Postgresql, Express, React and Node.

## Running Database with docker

Make sure you have Docker installed. Change DB_PORT to 1234 in server .env file.

### Run the docker-compose file

```bash
docker-compose up
```

## Swagger API Documentation

[Documentation](http://localhost:9000/api/docs/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/{username}/{repo-name}
```

Go to the project directory

```bash
  cd job-finder
```

Install dependencies

```bash
  npm install
```

Go to server directory and install dependencies

```bash
  npm install
```

Go to client directory and install dependencies

```bash
  npm install
```

Go to server directory and start the server

```bash
  npm run dev
```

Go to client directory and start the client

```bash
  npm run start
```

Start both client and server concurrently from the root directory

```bash
  npm run dev
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env files in both client and server directory

### client/.env

`API_URL`

### server/.env

`POSTGRES_USER`

`POSTGRES_HOST`

`POSTGRES_PASSWORD`

`POSTGRES_DB`

`POSTGRES_DB_TEST`

`POSTGRES_PORT`

`PORT`

`SECRET`

`REFRESH_SECRET`

`SMTP_FROM`
