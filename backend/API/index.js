require('dotenv').config();
const axios = require('axios');


module.exports = function (app) { //passing in express from server.js as app

  //Search for Popular Games
  app.get("/api/games/:game", (req, res) => {
    // getting all games
    let results = [];
    axios({
      url: "https://api-v3.igdb.com/games",
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'user-key': process.env.IGDB_KEY
      },
      data: `fields *; search "${req.params.game}"; limit 1;`
    })
      .then(response => {
        console.log(response.data)
        res.send(response.data)
      })
  });

  // Gets game artwork image url
  app.get("/api/images/:id", (req, res) => {
    axios({
      url: "https://api-v3.igdb.com/covers",
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'user-key': process.env.IGDB_KEY
      },
      data: `fields alpha_channel,animated,game,height,image_id,url,width; where id = ${req.params.id}; limit 1;`
    })
      .then(response => {
        res.send(`https://images.igdb.com/igdb/image/upload/t_logo_med_2x/${response.data[0].image_id}.png`)
      })
  })
}