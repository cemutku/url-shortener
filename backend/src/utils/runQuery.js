const { crateTables, insertValues, dropTables } = require('./queryFunctions');

(async () => {
	await crateTables();
	await insertValues();
})();
