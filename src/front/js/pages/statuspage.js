import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Title } from "react-bootstrap";
import { Text } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "../component/starRating";

export const Status = (props) => {
  const { id } = useParams();
  const [rating, setRating] = useState(0)
  useEffect(() => {
    actions.getPerson(id);
  }, []);

  const { store, actions } = useContext(Context);
  const onRating = (newRating) => {
    setRating(newRating)  
  }
 
  return (
    <div className="statuscard">
      <Card
        className="text-center mt-4"
        style={{
          width: "50%",
          margin: "auto",
          height: "100%",
          background: "black",
          color: "white",
          fontSize: "36px",
        }}
      >
        <div className="d-flex m-auto">
          <Card.Title style={{ fontSize: "48px" }}>
            {store.person.first_name}
          </Card.Title>
          <div style={{ marginLeft: "0.5rem" }}>
            <Card.Title style={{ fontSize: "48px" }}>
              {store.person.last_name}
            </Card.Title>
          </div>
        </div>
        <Card.Body>
          <img src={store.person.image} height="400" width="500" />
          <Card.Title>{store.person.bio}</Card.Title>
          <Card.Text>traits and interests</Card.Text>
          <div>
            <div className="d-flex flex-column">
              <Button
                style={{ width: "15rem", margin: "auto" }}
                variant="primary"
              >
                Request A Date
              </Button>

              <Link to="/">
                <Button style={{ width: "15rem" }} variant="primary">
                  Close
                </Button>
              </Link>
            </div>
          </div>
          <Rating rating={rating} onRating={onRating} />
        </Card.Body>
      </Card>
    </div>
  );
};
