const mongoose = require('mongoose');
const User = require('../models/User');

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function sanitize(user) {
  const data = user.toObject();
  delete data.password;
  return data;
}

exports.getAll = async (req, res, next) => {
  try {
    const items = await User.find().select('-password');
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: 'Invalid id' });
    const item = await User.findById(id).select('-password');
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const item = await User.create(req.body);
    res.status(201).json(sanitize(item));
  } catch (err) {
    next(err);
  }
};

exports.updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: 'Invalid id' });
    const payload = { ...req.body };
    delete payload.password;
    const item = await User.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).select('-password');
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.removeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: 'Invalid id' });
    const item = await User.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};

exports.removeAll = async (req, res, next) => {
  try {
    const result = await User.deleteMany({});
    res.json({ deletedCount: result.deletedCount });
  } catch (err) {
    next(err);
  }
};
