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
    const { title } = this.props
    if (this.props.id === undefined) {
      return <div>Loading...</div>
    }
    return (
      <div>
        {title}
        <Link to={`/`}>
          <Button variant="primary">Home</Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    poster: state.poster_path,
    genres: state.genres,
    id: state.id,
  }
}

export default connect(mapStateToProps)(MovieDetails)
