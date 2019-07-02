// Import scrape and date scripts
var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

// Import models

var Games = require("../models/Games");

module.exports = {

    fetch: function (cb) {

        scrape(function (data) {

            var gameData = data;

            for (var i = 0; i < gameData.length; i++) {
                gameData[i].date = makeDate();
                gameData[i].saved = false;
            }

            Games.collection.insertMany(gameData, { ordered: false }, function (err, docs) {
                cb(err, docs);
            });
        });
    },

    delete: function (query, cb) {
        Games.remove(query, cb);
    },

    get: function (query, cb) {
        Games.find(query)
            .sort({
                _id: -1
            })
            .exec(function (err, doc) {
                cb(doc);
            });
    },

    update: function (query, cb) {
        Games.update({ _id: query._id }, {
            $set: query
        }, {}, cb);
    }
}