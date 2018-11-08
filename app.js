const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;

const users = require("./routes/api/users");
const events = require("./routes/api/events");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/events", events);

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Test!"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
