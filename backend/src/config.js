const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	connectionString: process.env.CONNECTION_STRING,
	nodeEnvironment: process.env.NODE_ENV,
	appPort: process.env.PORT,
};
