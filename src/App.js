import React, { Component } from "react"
//import { connect } from "react-redux"
import { Container, Row, Col, Card } from "react-bootstrap"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Card>content here</Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default App
// const mapStateToProps = state => {
//   return {
//     state,
//   }
// }
//
// export default connect(mapStateToProps)(App)
