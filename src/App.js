import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Row, Col, Card } from "react-bootstrap"
import { getMovies } from "./actions"

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
              <Card>
                {movies === undefined ? (
                  <div>loading</div>
                ) : (
                  <ul>
                    {movies.map(movie => (
                      <li key={movie.id}>{movie.title}</li>
                    ))}
                  </ul>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
// export default App
const mapStateToProps = state => {
  return {
    movies: state.results,
  }
}

export default connect(mapStateToProps)(App)
