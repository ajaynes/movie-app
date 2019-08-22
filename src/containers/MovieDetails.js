import React, { Component } from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getMovieDetails } from "../actions"

class MovieDetails extends Component {
  componentDidMount() {
    this.props.id === undefined
      ? this.props.dispatch(getMovieDetails(this.props.match.params.movie_id))
      : this.props.dispatch(getMovieDetails(this.props.id))
  }
  render() {
    const {
      title,
      credits,
      overview,
      genres,
      homepage,
      vote_average,
    } = this.props
    if (
      this.props.id === undefined ||
      this.props.match.params.movie_id === this.props.id
    ) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h1>{title}</h1>
        <h2>{overview}</h2>
        <h3>{homepage}</h3>
        <h4>{vote_average}</h4>
        <ul>
          {credits.cast.map(c => (
            <li key={c.cast_id}>{c.name}</li>
          ))}
        </ul>
        <ul>
          {credits.crew.map(c => (
            <li key={c.credit_id}>{c.name}</li>
          ))}
        </ul>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <Link to={`/`}>
          <Button variant="primary">Home</Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    backdrop: state.backdrop_path,
    title: state.title,
    credits: state.credits,
    genres: state.genres,
    homepage: state.homepage,
    overview: state.overview,
    videos: state.videos,
    vote_average: state.vote_average,
    id: state.id,
  }
}

export default connect(mapStateToProps)(MovieDetails)
