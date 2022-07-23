import React from "react";
import {Card} from "react-bootstrap";
import {Title} from "react-bootstrap";
import {Text} from "react-bootstrap";
import {Button} from "react-bootstrap";

export const Status = () => {
  return (
    <div>
      <Card className="text-center mt-4" style={{width: "35rem", margin: "auto", height: "35rem"}}>
        <Card.Header>Andrew</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};
