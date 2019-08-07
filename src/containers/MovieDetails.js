import React, { Component } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getMovieDetails } from "../actions"

class MovieDetails extends Component {
  componentDidMount() {
    this.props.dispatch(getMovieDetails(this.props.id))
  }
  render() {
    return (
      <div>
        {this.props.title}
        {/*{this.props.genres.map(genre => (
          <p>{genre.name}</p>
        ))}*/}
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
