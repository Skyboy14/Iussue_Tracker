const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const connectDb = require("./config/mongoose");
const bodyParser = require("body-parser");
const expressBodyParser = require("express");

const app = express();
const port = 8083;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// View Engine Setup
app.use(express.static(__dirname + "/public"));
app.use(expressLayouts);
app.set("layout", "./layouts/_Mainlayout");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/projectRouter"));

//port testing
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
    return;
  }
  console.log("Yup!My Server is running on Port : ", port);
});
