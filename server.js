const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan')
const path = require('path')

require("dotenv").config()

const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

var db = (process.env.MONGODB_URI || "mongodb://localhost/todos");

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true }, function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Mongoose connection is successful!");
  }
});

// all api routes are in API folder
require('./API')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server is starting at PORT: ${PORT}`);
});