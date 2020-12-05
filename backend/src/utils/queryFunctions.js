const { pool } = require('../models/pool');

const {
	createShortUrlTable,
	insertShortUrls,
	dropShortUrlTable,
} = require('./queries');

const executeQueryArray = async (arr) =>
	new Promise((resolve) => {
		const stop = arr.length;
		arr.forEach(async (query, index) => {
			await pool.query(query);
			if (index + 1 == stop) {
				resolve();
			}
		});
	});

module.exports = {
	executeQueryArray,
	dropTables: () => executeQueryArray([dropShortUrlTable]),
	crateTables: () => executeQueryArray([createShortUrlTable]),
	insertValues: () => executeQueryArray([insertShortUrls]),
};
