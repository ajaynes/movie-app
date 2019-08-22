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
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
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
  }
}

const requestMoviesDetails = (
  details,
  backdrop,
  title,
  credits,
  genres,
  homepage,
  overview,
  videos,
  vote_average,
  id
) => {
  return {
    type: REQUEST_MOVIE_DETAILS,
    backdrop: details.backdrop_path,
    title: details.title,
    credits: details.credits,
    genres: details.genres,
    homepage: details.homepage,
    overview: details.overview,
    videos: details.videos,
    vote_average: details.vote_average,
    id: details.id,
  }
}

export const getMovieDetails = movie_id => {
  return dispatch => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=release_dates,videos,credits,similar,recommendations,images&include_image_language=en,null`
    )
      .then(response => response.json())
      .then(json => dispatch(requestMoviesDetails(json)))
  }
}
