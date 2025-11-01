const mongoose = require('mongoose');

async function connectDB(uri) {
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, {
    autoIndex: true,
  });
  const { host, name } = mongoose.connection;
  console.log(`MongoDB connected -> host: ${host}, db: ${name}`);
}

module.exports = { connectDB };

