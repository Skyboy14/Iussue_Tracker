const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yadavakash224ay:rTQ60PwDJCHYJ8Jf@cluster0.vhw9s31.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error while connecting to MongoDB"));

db.once('open', function () {
    console.log('Connected to DataBase :: MongoDB');
});

module.exports = db;
