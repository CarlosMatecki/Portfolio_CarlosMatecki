const jwt = require('jsonwebtoken');

const isProduction = process.env.NODE_ENV === 'production';
const expiresIn = process.env.JWT_EXPIRES_IN || '3d';

function generateToken(res, user) {
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn,
  });

  if (res && typeof res.cookie === 'function') {
    res.cookie('token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: getExpires(expiresIn),
    });
  }

  return token;
}

function getExpires(value) {
  const matches = /^(\d+)([dhm])$/.exec(value);
  if (!matches) return 3 * 24 * 60 * 60 * 1000;
  const amount = Number(matches[1]);
  const unit = matches[2];
  if (unit === 'd') return amount * 24 * 60 * 60 * 1000;
  if (unit === 'h') return amount * 60 * 60 * 1000;
  if (unit === 'm') return amount * 60 * 1000;
  return 3 * 24 * 60 * 60 * 1000;
}

module.exports = { generateToken };

