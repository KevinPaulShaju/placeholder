import React from "react";
import { Container, Card } from "react-bootstrap";

const UserProfile = (props) => {
  const emailIcon = <i className="fas fa-at"></i>;
  const userIcon = <i className="far fa-user"></i>;

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://myplaceholder.herokuapp.com/${props.image}`}
        />
        <Card.Body>
          <Card.Title>
            {userIcon} {props.name}
          </Card.Title>
          <Card.Text>
            {emailIcon} {props.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;
