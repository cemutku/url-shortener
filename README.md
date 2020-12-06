# URL Shortener

Url shortener service created with Node.js and PostgreSQL. Expressjs is used for creating APIs.

## Installation - Backend

After cloning the project, use the command below for the necessary npm packages for **backend**. You must execute the command in the project root directory.

```bash
...\url-shortener> npm install
```

To spin up a PostgreSQL instance quickly on a container, run the command below:

```bash
docker run -d --name postgres-dev -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=12345 -v ${pwd}/postgres-data:/var/lib/postgresql/data -p 5432:5432 postgres
```

Connection string for the database instance which will be created with the docker command above is `CONNECTION_STRING="postgresql://postgres:12345@localhost:5432/postgres"`

## Usage

Before using the API, you must set the CONNECTION_STRING value in the .env file. Change the name of the ".env_sample" to ".env" then add your environment variables to this file.

Run the `npm start` in the root directory and go check the http://localhost:5000/api for backend API.

You must be seeing the "message":"Url shortener API is running..." ont the browser then you can thest it from an application like Postman.

![alt text](https://raw.githubusercontent.com/cemutku/url-shortener/main/frontend/src/url-shortener.PNG 'Logo Title Text 1')

## Test

Run the `npm run test` for testing endpoints and database connections. After running test command "coverage" folder will be created in the root directory. You can check the html test coverage report from that folder.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
