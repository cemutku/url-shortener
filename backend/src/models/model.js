const { pool } = require('./pool');

function Model(table) {
	this.pool = pool;
	this.table = table;
	this.pool.on(
		'error',
		(err, client) => `Error, ${err}, on idle client${client}`
	);
}

Model.prototype.query = async function (text, params) {
	return this.pool.query(text, params);
};

Model.prototype.insertShortUrl = `
INSERT INTO shortened_url(
	long_url,
	short_url
	) VALUES($1, $2)`;

Model.prototype.findLongUrl =
	'SELECT long_url FROM shortened_url WHERE short_url = $1';

module.exports = Model;
