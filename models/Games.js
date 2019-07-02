var mongoose = require('mongoose')
var Schema = mongoose.Schema

var gamesSchema = new Schema({
    
    cover: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    popularity: {
        type: String,
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
        default: false
    }
})

var Games = mongoose.model("Games", gamesSchema)

module.exports = Games