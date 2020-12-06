const Router = require('express-promise-router');
const { getUrlByShortUrl } = require('../controllers/url-controller');

const router = new Router();

router.get('/api', (req, res) =>
	res.status(200).json({ message: 'Url shortener API is running...' })
);

router.get('/:surl', getUrlByShortUrl);

module.exports = router;
