const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 4000;
// let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully!");
})

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