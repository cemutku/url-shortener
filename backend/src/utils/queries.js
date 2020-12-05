const createShortUrlTable = `
DROP TABLE IF EXISTS shortened_url;
CREATE TABLE IF NOT EXISTS shortened_url (
  short_url VARCHAR(8) NOT NULL PRIMARY KEY,
  long_url VARCHAR(4000) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
  )
  `;

const insertShortUrls = `
INSERT INTO shortened_url(long_url, short_url)
VALUES ('https://www.test-long-url/dawdawdawdamdawd', '12adf4rg')
`;

const dropShortUrlTable = 'DROP TABLE shortened_url';

module.exports = {
	createShortUrlTable,
	insertShortUrls,
	dropShortUrlTable,
};
