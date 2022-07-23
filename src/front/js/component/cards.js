import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";


export const Cards = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Andrew</Card.Title>
        <Card.Text>
          5'9 but 6ft on a good day 
        </Card.Text>
        <Link to = "/Status"><Button variant="primary">Read reviews</Button></Link>
      </Card.Body>
    </Card>
  );
};
