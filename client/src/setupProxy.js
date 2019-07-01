const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy(`/api/images/`, { target: 'http://localhost:5000/' }));
    app.use(proxy(`/api/games/`, { target: 'http://localhost:5000/' }));
};

