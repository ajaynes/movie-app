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
      return {
        ...state,
        ...action.details,
      }
    default:
      return state
  }
}

export default movies
