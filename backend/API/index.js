require('dotenv').config();
const axios = require('axios');


module.exports = function (app) { //passing in express from server.js as app

  //Search for Popular Games
  app.get("/api/popular", (req, res) => {
    axios({
      url: "https://api-v3.igdb.com/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'user-key': process.env.IGDB_KEY
      },
      data: "fields name,summary,popularity; sort popularity desc; exclude tags;"
    })
      .then(response => {
        res.send(response.data)
      })
      .catch(err => {
        console.error(err);
      });
  });

  // Gets random game artwork image url
  app.get("/api/images", (req, res) => {
    axios({
      url: "https://api-v3.igdb.com/covers",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'user-key': process.env.IGDB_KEY
      },
      data: "fields alpha_channel,animated,game,height,image_id,url,width;"
    })
      .then(response => {
        let urls = response.data.map(key => {
          return key.url
        })
        res.send(urls)
        console.log(urls);
      })
      .catch(err => {
        console.error(err);
      });
  })
}