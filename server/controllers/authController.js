const User = require('../models/User');
const { generateToken } = require('../utils/generateToken');

function sanitizeUser(user) {
  const userObj = user.toObject();
  delete userObj.password;
  return userObj;
}

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required' });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const user = await User.create({ name, email, password, role: 'user' });
    const token = generateToken(res, user);

    res.status(201).json({ user: sanitizeUser(user), token });
  } catch (err) {
    next(err);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(res, user);
    res.json({ user: sanitizeUser(user), token });
  } catch (err) {
    next(err);
  }
};

exports.signout = async (_req, res) => {
  const isProduction = process.env.NODE_ENV === 'production';
  res.clearCookie('token', {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
  });
  res.json({ message: 'Signed out' });
};

exports.me = async (req, res) => {
  res.json({ user: req.user });
};

