const { expect, server, BASE_URL } = require('./setup');

describe('short urls', () => {
	it('get long url by short url', (done) => {
		server
			.get(`${BASE_URL}/urls/12adf4rg`)
			.expect(200)
			.end((err, res) => {
				expect(res.status).to.equal(200);
				expect(res.body.result).to.be.instanceOf(Array);
				res.body.result.forEach((m) => {
					expect(m).to.have.property('long_url');
				});
				done();
			});
	});

	it('posts long url and get short url', (done) => {
		const data = { url: 'http://localhost:3000/api/urls' };
		server
			.post(`${BASE_URL}/urls`)
			.send(data)
			.expect(201)
			.end((err, res) => {
				expect(res.status).to.equal(201);
				expect(res.body.shortUrl).to.be.a('string');
				expect(res.body).to.have.property('shortUrl');
				done();
			});
	});
});
