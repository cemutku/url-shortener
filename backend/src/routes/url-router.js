const Router = require('express-promise-router');
const { createShortUrl } = require('../controllers/url-controller');

const router = new Router();

router.post('/', createShortUrl);

module.exports = router;
