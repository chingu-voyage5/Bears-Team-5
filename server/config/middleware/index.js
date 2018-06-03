const router = require('express').Router();
const bodyParser = require('body-parser'); // use parsed form data in request body
const morgan = require('morgan'); // log requests to console
const helmet = require('helmet'); //sets HTTP headers to secure express routes
const cookieParser = require('cookie-parser'); // parse HTTP cookie requests

const session = require('./session');
const cors = require('./cors');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors);
router.use(session);
router.use(morgan('dev'));
router.use(helmet());
router.use(cookieParser());

module.exports = router;