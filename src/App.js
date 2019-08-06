import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Row, Col, Card } from "react-bootstrap"
import { getMovies } from "./actions"
import MovieListItem from "./components/MovieListItem"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getMovies())
  }
  render() {
    const { movies } = this.props
    console.log(movies)
    return (
      <div className="App">
        <Container>
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
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const movielist = state.results
  return {
    movies: movielist,
  }
}

export default connect(mapStateToProps)(App)
