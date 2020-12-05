const createShortUrlTable = `
DROP TABLE IF EXISTS shortened_url;
CREATE TABLE IF NOT EXISTS shortened_url 
(
  short_url VARCHAR(8) NOT NULL,
  long_url VARCHAR(4000) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT shortened_url_pkey PRIMARY KEY (short_url)
)`;

const insertShortUrls = `
INSERT INTO shortened_url(short_url, long_url)
VALUES ('12adf4rg', 'https://www.test-long-url/test')
`;

const dropShortUrlTable = 'DROP TABLE IF EXISTS shortened_url';

module.exports = {
	createShortUrlTable,
	insertShortUrls,
	dropShortUrlTable,
};
