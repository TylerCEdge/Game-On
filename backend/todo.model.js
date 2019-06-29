const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gameOnSchema = new Schema({
    game_name: {
        type: String
    },
    game_type: {
        type: String
    },
    favoritism: {
        type: String
    }
});

module.exports = mongoose.model('gameOnSchema', gameOnSchema);