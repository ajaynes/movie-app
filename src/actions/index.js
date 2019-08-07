const API_KEY = process.env.REACT_APP_TMDB

export const REQUEST_MOVIES = "REQUEST_MOVIES"
export const REQUEST_MOVIE_DETAILS = "REQUEST_MOVIE_DETAILS"
export const GET_MOVIE_ID = "GET_MOVIE_ID"

const requestMovies = movies => {
  return {
    type: REQUEST_MOVIES,
    movies,
  }
}

export const getMovies = () => {
  return dispatch => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(json => dispatch(requestMovies(json)))
  }
}

const movieID = id => {
  return {
    type: GET_MOVIE_ID,
    id,
  }
}

export const getMovieID = id => {
  return dispatch => {
    dispatch(movieID(id))
    console.log(id)
  }
}

const requestMoviesDetails = details => {
  return {
    type: REQUEST_MOVIE_DETAILS,
    details,
  }
}

export const getMovieDetails = movie_id => {
  return dispatch => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=credit`
    )
      .then(response => response.json())
      .then(json => dispatch(requestMoviesDetails(json)))
  }
}
