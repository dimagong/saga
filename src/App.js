import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchPost from "./components/FetchPost"

function App() {
  return (
    <>
      <Container >
        <Row className="justify-content-xs-center pt-2 ">
          <Col >
            <PostForm />
          </Col>
        </Row>
        <Row className="justify-content-center pt-5 ">
          <Col xs='4'>
            <h2 className="text-primary">Synchronous post</h2>
            <Posts />
          </Col>
          <Col xs='4'>
            <h2 className="text-danger">Asynchronous posts</h2>
            <FetchPost />
          </Col>

        </Row>
      </Container>
    </>

  );
}

export default App;
