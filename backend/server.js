const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan')
const PORT = 4000;
// let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'))

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully!");
})

// all api routes are in API folder
require('./API')(app)

app.listen(PORT, function () {
    console.log("Server is running on PORT " + PORT);
});