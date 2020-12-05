const {
	crateTables,
	insertValues,
	dropTables,
} = require('../src/utils/queryFunctions');

before(async () => {
	await crateTables();
	await insertValues();
});

after(async () => {
	await dropTables();
});
