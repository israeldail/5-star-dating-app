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
  const [rating, setRating] = useState(0);
  useEffect(() => {
    actions.getPerson(id);
  }, []);

  const { store, actions } = useContext(Context);
  const onRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="statuscard">
      <Card
        className="text-center "
        style={{
          width: "100%",
          margin: "auto",
          height: "100%",
          background: "#f4ddc7",
          color: "#0C090A",
          fontSize: "36px",
          border: "none",
        }}
      >
        <div className="d-flex">
          <img
            src={store.person.image}
            height="300"
            width="300"
            style={{
              borderRadius: "50%",
              float: "left",
              marginLeft: "3rem",
              marginTop: "2rem",
            }}
          />
          <Card.Title style={{ fontSize: "48px", marginTop: "2rem" }}>
            {store.person.first_name}
          </Card.Title>
          <div style={{ marginLeft: "0.5rem" }}>
            <Card.Title style={{ fontSize: "48px", marginTop: "2rem" }}>
              {store.person.last_name}
            </Card.Title>
          </div>
        </div>
        <div id="tabRow">
        <div className="mytabs">
          <input type="radio" id="tababout" name="mytabs" />
          <label htmlFor="tababout">About</label>
          <div className="tab">
            <h2>About</h2>
            {store.person.bio}
          </div>
        </div>

        <div className="mytabs">
          <input type="radio" id="tabphotos" name="mytabs" />
          <label htmlFor="tabphotos">Photos</label>
          <div className="tab">
            <h2>Photos</h2>
            {store.person.bio}
          </div>
        </div>

        <div className="mytabs">
          <input type="radio" id="tabreviews" name="mytabs" />
          <label htmlFor="tabreviews">Reviews</label>
          <div className="tab">
            <h2>Reviews</h2>
            {store.person.bio}
            <Rating rating={rating} onRating={onRating} />
          </div>
        </div>
        </div>

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
      </Card>
    </div>
  );
};
