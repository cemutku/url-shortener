const Router = require('express-promise-router');

const router = new Router();

router.get('/', (req, res) =>
	res.status(200).json({ message: 'Url shortener API is running...' })
);

module.exports = router;
