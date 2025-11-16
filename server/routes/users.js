const express = require('express');
const controller = require('../controllers/userController');
const { protect, restrictTo } = require('../middleware/auth');

const router = express.Router();

router.use(protect, restrictTo('admin'));

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.updateById);
router.delete('/:id', controller.removeById);
router.delete('/', controller.removeAll);

module.exports = router;
