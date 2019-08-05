const API_KEY = process.env.REACT_APP_TMDB

export const REQUEST_MOVIES = "REQUEST_MOVIES"
const requestMovies = movies => {
  return {
    type: REQUEST_MOVIES,
    movies,
  }
}

export const getMovies = () => {
  return dispatch => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(json => dispatch(requestMovies(json)))
  }
}
