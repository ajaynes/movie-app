import { REQUEST_MOVIES, GET_MOVIE_ID, REQUEST_MOVIE_DETAILS } from "../actions"

const movies = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        ...action.movies,
      }
    case GET_MOVIE_ID:
      return Object.assign({}, state, {
        id: action.id,
      })
    case REQUEST_MOVIE_DETAILS:
      return Object.assign({}, state, {
        title: action.title,
        backdrop: action.backdrop,
        credits: action.credits,
        genres: action.genres,
        homepage: action.homepage,
        overview: action.overview,
        videos: action.videos,
        vote_average: action.vote_average,
        id: action.id,
      })
    default:
      return state
  }
}

export default movies
