const Router = require('express-promise-router');

const {
	getUrlByShortUrl,
	createShortUrl,
} = require('../controllers/url-controller');

const router = new Router();

router.get('/:surl', getUrlByShortUrl);
router.post('/', createShortUrl);

module.exports = router;
