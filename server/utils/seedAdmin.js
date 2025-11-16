const User = require('../models/User');

async function seedAdmin() {
  const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME } = process.env;
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !ADMIN_NAME) {
    console.warn('Admin credentials env vars missing. Skipping admin seeding.');
    return;
  }

  const existing = await User.findOne({ email: ADMIN_EMAIL }).select('+password');

  if (existing) {
    if (existing.role !== 'admin') {
      existing.role = 'admin';
      await existing.save();
      console.log('Admin role updated for existing user');
    }
    return;
  }

  await User.create({
    name: ADMIN_NAME,
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    role: 'admin',
  });

  console.log('Admin user created from env vars');
}

module.exports = { seedAdmin };

