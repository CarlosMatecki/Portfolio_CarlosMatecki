const express = require('express');
const controller = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
router.get('/signout', controller.signout);
router.get('/me', protect, controller.me);

module.exports = router;

