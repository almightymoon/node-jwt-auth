// app.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port =  process.env.PORT
const mongoURI = 'mongodb+srv://moon:qwert1234@cluster0.gvga3.mongodb.net/';
const dbName = 'jabar-project';

mongoose.connect(`${mongoURI}${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // MongoDB connection successful, no need to listen on this port
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const e = require('express');
app.use('/auth', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
