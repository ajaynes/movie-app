import React from "react"
import { Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const MovieListItem = props => {
  const { overview, title, poster, id } = props
  return (
    <Col md={6}>
      <Card>
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{overview}</Card.Text>
              <Link to={`/moviedetails/${id}`}>
                <Button variant="primary">Go somewhere {id}</Button>
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default MovieListItem
