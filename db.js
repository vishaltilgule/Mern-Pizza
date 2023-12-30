const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://user12:user12@cluster0.ineoi6i.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection

db.on('connected', () => {
  console.log('Mongo DB connection Successful');
});

db.on('error', (error) => {
  console.error('Mongo DB connection failed:', error);
});

db.on('disconnected', () => {
  console.log('Mongo DB disconnected');
});

module.exports = mongoose;
