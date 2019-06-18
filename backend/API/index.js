require('dotenv').config();
const axios = require('axios');


module.exports = function (app) { //passing in express from server.js as app

  //Search for Popular Games
  app.get("/api/popular", (req, res) => {
    // getting all games
    let results = [];
    axios({
      url: "https://api-v3.igdb.com/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'user-key': process.env.IGDB_KEY
      },
      data: "fields *; sort popularity desc;"
    })
      .then(response => {
        res.send(response.data)
      })
      .catch(err => {
        console.error(err);
      });

  });

  // Gets game artwork image url
  app.get("/api/images/:id", (req, res) => {
    console.log(req.params.id)
    axios({
      url: "https://api-v3.igdb.com/covers",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'user-key': process.env.IGDB_KEY
      },
      data: `fields alpha_channel,animated,game,height,image_id,url,width; where id = ${req.params.id};`
    })
      .then(response => {
        console.log(`======image==============`)
        console.log(response.data[0].image_id)
        res.send(`https://images.igdb.com/igdb/image/upload/t_logo_med_2x/${response.data[0].image_id}.png`)
      })
      .catch(err => {
        console.error(err);
      });
  })
}