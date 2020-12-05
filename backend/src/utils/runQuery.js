const { crateTables, insertValues, dropTables } = require('./queryFunctions');

(async () => {
	await dropTables();
	await crateTables();
	await insertValues();
})();
