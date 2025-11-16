const express = require('express');
const controller = require('../controllers/contactController');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

router.get('/', controller.getAll);
router.post('/public', controller.createPublic);
router.get('/:id', controller.getById);
router.post('/', protect, restrictTo('admin'), controller.create);
router.put('/:id', protect, restrictTo('admin'), controller.updateById);
router.delete('/:id', protect, restrictTo('admin'), controller.removeById);
router.delete('/', protect, restrictTo('admin'), controller.removeAll);

module.exports = router;
