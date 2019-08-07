import React, { Component } from "react"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PopularMovies from "./containers/PopularMovies"
import MovieDetails from "./containers/MovieDetails"

class App extends Component {
  render() {
    const { movies } = this.props
    console.log(movies)
    return (
      <div className="App">
        <Container>
          <Router>
            <Switch>
              <Route exact path="/" component={PopularMovies} />
              <Route
                exact
                path="/moviedetails/:movie_id"
                component={MovieDetails}
              />
            </Switch>
          </Router>
        </Container>
      </div>
    )
  }
}

export default App
