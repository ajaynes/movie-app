import { REQUEST_MOVIES } from "../actions"

const movies = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        ...action.movies,
      }
    default:
      return state
  }
}

export default movies
