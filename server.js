// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // ✅ Make sure the path is correct
require('dotenv').config();

const app = express();
app.use(express.json()); // ✅ Needed for parsing JSON bodies

// Route middleware
app.use('/api/auth', authRoutes);

// Optional: root route to avoid "Cannot GET /"
app.get('/', (req, res) => {
  res.send('API is running');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  });
})
.catch(err => console.error(err));
