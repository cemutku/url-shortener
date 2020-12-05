const asyncHandler = require('express-async-handler');
const { customAlphabet } = require('nanoid/async');
const Model = require('../models/model');
const validUrl = require('valid-url');

const shortUrlModel = new Model('shortened_url');

const getUrlByShortUrl = asyncHandler(async (req, res) => {
	const { surl } = req.params;

	try {
		const { rows } = await shortUrlModel.query(shortUrlModel.findLongUrl, [
			surl,
		]);

		res.status(200).json({ result: rows });
	} catch (error) {
		res.status(500).json({ messages: error.stack });
	}
});

const createShortUrl = asyncHandler(async (req, res) => {
	const { url } = req.body;
	let errorCode = '';

	if (!validUrl.isUri(url)) {
		res.status(400).json({ message: 'It is not a valid url!' });
	} else {
		do {
			try {
				const nanoid = customAlphabet(
					'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
					8
				);

				let hashedUrl = await nanoid();

				await shortUrlModel.query(shortUrlModel.insertShortUrl, [
					url,
					hashedUrl,
				]);
				errorCode = null;
				res.status(201).json({
					shortUrl: `http://${req.headers.host}/${hashedUrl}`,
				});
			} catch (error) {
				const { code, constraint } = error;
				if (code === '23505' && constraint == 'shortened_url_pkey') {
					errorCode = code;
				}
				console.log(error);
			}
		} while (errorCode);
	}
});

module.exports = {
	getUrlByShortUrl,
	createShortUrl,
};
