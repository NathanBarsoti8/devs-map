const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.get);
routes.post('/devs', DevController.post);

routes.get('/search', SearchController.getBySearch);

module.exports = routes;