const movies = require('../controllers/MoviesController')

const MainRouter = async(app) => {

// main query routes
  app.get('/api-query/:query', movies.apiSearch)
  app.get('/db-query/:query', movies.dbSearch)
  app.get('/json-query/:query', movies.jsonSearch)
  app.get('/insert', movies.insert)

}
module.exports = MainRouter;