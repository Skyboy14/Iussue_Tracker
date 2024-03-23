const mongoose = require("mongoose");

const DB =
  "mongodb+srv://yadavakash224ay:rTQ60PwDJCHYJ8Jf@cluster0.vhw9s31.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});
module.exports = db;
