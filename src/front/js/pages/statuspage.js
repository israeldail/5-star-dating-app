import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Title } from "react-bootstrap";
import { Text } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Status = (props) => {
  const { id } = useParams();
  useEffect(() => {
    actions.getPerson(id);
  }, []);

  const { store, actions } = useContext(Context);
  return (
    <div className="statuscard">
      <Card
        className="text-center mt-4"
        style={{
          width: "50%",
          margin: "auto",
          height: "35rem",
          background: "white",
          color: "black",
        }}
      >
        <Card.Header>{store.person.name}</Card.Header>
        <Card.Body>
          <img src={store.person.image} />
          <Card.Title>{store.person.bio}</Card.Title>
          <Card.Text>traits and interests</Card.Text>
          <div>
            <Link to="/">
              <Button variant="primary">Close</Button>
            </Link>

            <Button variant="primary">Request A Date</Button>

            <div id="stars" className="d-flex">
              <div>
                <i id="star1" className="fa-solid fa-star"></i>
              </div>
              <div>
                <i id="star2" className="fa-solid fa-star"></i>
              </div>
              <div>
                <i id="star3" className="fa-solid fa-star"></i>
              </div>
              <div>
                <i id="star4" className="fa-solid fa-star"></i>
              </div>
              <div>
                <i id="star5" className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
