const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '.env') });

const { connectDB } = require('./server/config/db');
const { seedAdmin } = require('./server/utils/seedAdmin');

const contactRoutes = require('./server/routes/contacts');
const projectRoutes = require('./server/routes/projects');
const educationRoutes = require('./server/routes/educations');
const userRoutes = require('./server/routes/users');
const authRoutes = require('./server/routes/auth');

const { errorHandler, notFound } = require('./server/middleware/errorHandler');

const app = express();

app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Portfolio API is running' });
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/educations', educationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://carlos:12345@cluster93853.xcteok2.mongodb.net/';

async function start() {
  try {
    if (MONGODB_URI) {
      await connectDB(MONGODB_URI);
      await seedAdmin();
    } else {
      console.warn('MONGODB_URI not set. Server will start without DB connection.');
    }
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
}

start();
