// Server routes

// Import Scrape
var scrape = require("../scripts/scrape");

// Import games/notes
var gamesController = require("../controllers/games");

module.exports = function (router) {
    // Home page route
    router.get("/", function (req, res) {
        res.render("home");
    });

    // Saved page route
    router.get("/saved", function (req, res) {
        res.render("saved");
    });

    router.get("/api/fetch", function (req, res) {
        gamesController.fetch(function (err, docs) {
            if (!docs || docs.insertedCount === 0) {
                res.json({
                    message: "No new articles today. Check back tomorrow!"
                });
            }
            else {
                res.json({
                    message: "Added " + docs.insertedCount + " new articles!"
                });
            }
        });
    });

    router.get("/api/games", function (req, res) {
        var query = {};
        if (req.query.saved) {
            query = req.query;
        }
        
        gamesController.get(query, function (data) {
            res.json(data);
        });
    });

    router.delete("/api/games/:id", function (req, res) {
        var query = {};
        query._id = req.params.id;
        gamesController.delete(query, function (err, data) {
            res.json(data);
        });
    });

    router.patch("/api/games", function (req, res) {
        gamesController.update(req.body, function (err, data) {
            res.json(data);
        });
    });

    // router.get("/api/notes/:headline_id?", function (req, res) {
    //     var query = {};
    //     if (req.params.headline_id) {
    //         query._id = req.params.headline_id;
    //     }
    //     notesController.get(query, function (err, data) {
    //         res.json(data);
    //     });
    // });

    // router.delete("/api/notes/:id", function (req, res) {
    //     var query = {};
    //     query._id = req.params.id;
    //     notesController.delete(query, function (err, data) {
    //         res.json(data);
    //     });
    // });

    // router.post("/api/notes", function (req, res) {
    //     notesController.save(req.body, function (data) {
    //         res.json(data);
    //     });
    // });
}