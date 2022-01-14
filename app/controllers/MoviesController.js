const axios = require('axios')
const Movie = require('../models/Movie')
const jsonMov = require('../json/jsonMov')
  
  module.exports = {
  // return movies data from external api
    apiSearch: async (request, reply) => {
      const searchUrl = 'https://api.themoviedb.org/3/search/movie';
      const apiKey = '68b4fe2a513155a58dd0af4adacb281b';
      const query = request.params.query
      const language = 'en';

      try {
        const movies = await axios.get(`${searchUrl}?api_key=${apiKey}&language=${language}&query=${query}`)
        var mov = [];
        movies.data.results.forEach((el)=>{
          mov.push({
            img:el.poster_path,
            title:el.title,
            o_title:el.original_title,
            description:el.overview,
            rating:el.vote_average,
            popularity: el.popularity,
            date: el.release_date
          })
        })
        reply.code(200).send(mov);
      } catch (e) {
        reply.code(500).send(e);
      }
    },
    // return movies data from database
    dbSearch: async (request, reply) => {
      const query = request.params.query

      try {
        const movies = await Movie.find({ "title": { "$regex": query, "$options": "i" } })
        reply.code(200).send(movies)
      } catch (e) {
        reply.code(500).send(e);
      }
    },

    // return movies data from json object
    jsonSearch: async (request, reply) => {
        const movies = jsonMov.movies
        const query = request.params.query
        var results = []

        try{
          for (var i=0; i < movies.length ; i++){
            if (movies[i]['title'].includes(query)){
              results.push({
                img:movies[i].posterUrl,
                title:movies[i].title,
                description:movies[i].plot,
                rating:((+movies[i].runtime/1000)+2.18).toFixed(1),
                popularity: ((+movies[i].runtime/1000)+0.3).toFixed(1),
                date: movies[i].year
              })
            }
          }
          reply.code(200).send(results)
        } catch (e) {
          reply.code(500).send(e);
        }
    },

    // insert movies data in database
    // the same json data in jsonSearch() was inserted here.
    insert: async (request, reply) => {
      const movies = jsonMov.movies
      
      try{
        movies.forEach(async el => {
          await Movie.create({
            img:el.posterUrl,
            title:el.title,
            description:el.plot,
            rating:((+el.runtime/1000)+2.18).toFixed(1),
            popularity: ((+el.runtime/1000)+0.3).toFixed(1),
            date: el.year
          })
        })
      reply.code(500).send({data:'inserted'})
      } catch (e) {
        reply.code(500).send(e);
      }

  }
}