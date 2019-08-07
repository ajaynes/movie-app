import React, { Component } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { connect } from "react-redux"
import { getMovies } from "../actions"
import MovieListItem from "../components/MovieListItem"

class PopularMovies extends Component {
  componentDidMount() {
    this.props.dispatch(getMovies())
  }
  render() {
    const { movies } = this.props
    return (
      <Row>
        <Col>
          {movies === undefined ? (
            <div>loading</div>
          ) : (
            <Row>
              {movies
                .filter(movie => movie.original_language === "en")
                .map(m => (
                  <MovieListItem
                    key={m.id}
                    poster={m.poster_path}
                    title={m.original_title}
                    overview={m.overview}
                    id={m.id}
                  />
                ))}
            </Row>
          )}
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const movielist = state.results
  return {
    movies: movielist,
  }
}

export default connect(mapStateToProps)(PopularMovies)