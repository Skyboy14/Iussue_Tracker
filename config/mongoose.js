const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://atlas-sql-65febe290d33e16c2a80b004-fmx0u.a.query.mongodb.net/test?ssl=true&authSource=admin"
);

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Error while connecting to MongoDB")
);

db.once("open", function () {
  console.log("Connected to DataBase :: MongoDB");
});

module.exports = db;
