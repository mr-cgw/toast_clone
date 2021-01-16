const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const db = require('./config/keys').mongoURI;
const passport = require("passport");
const path = require("path");
const users = require("./routes/api/users")
const applications = require("./routes/api/applications")
//* connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
//* setup passport
app.use(passport.initialize());
require("./config/passport")(passport);


const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World! >///w///<"))

//* set up api routes
app.use("/api/users", users)
app.use("/api/applications", applications)

app.listen(port, () => console.log(`server is running on port ${port}`))