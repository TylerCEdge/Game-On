const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const databaseRoutes = 'express.Router()'
// let Todo = require('./todo.model');

let gameOnDB = require('./todo.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/gameOnDB', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully!");
})

//calls app.use to pass to / 
databaseRoutes.route('/').get(function(req, res){
    gameOnDB.find(function(err, gameonSchema))
})

//find page that this routes to...if still todo or is games or another name
app.use('/todos', databaseRoutes);

// all api routes are in API folder
require('./API')(app)

app.listen(PORT, function () {
    console.log("Server is running on PORT " + PORT);
});