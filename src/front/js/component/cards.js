import React, { Fragment, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Cards = (props) => {
  useEffect(() => {
    actions.getQueue();
  }, []);

  const { store, actions } = useContext(Context);
  const onLike = (profile) => {
    actions.like(profile.id);
  };
  console.log("yoyoyoyoyoyo", store.queue);
  return (
    <div className="d-flex justify-content-evenly flex-column" id="threecards">
      <Fragment>
        {store.queue.map((profile, i) => {
          return (
            <Card
              style={{
                width: "50rem",
                background: "black",
                maxHeight: "85rem",
                marginBottom: "50px",
                color: "white",
                boxShadow: "5px 10px #888888",
              }}
              key={i}
            >
              <Card.Img variant="top" src={profile.image} />
              <Card.Body>
                <div className="d-flex">
                  <Card.Title>{profile.first_name}</Card.Title>
                  <div className="d-flex" style={{ marginLeft: "0.5rem" }}>
                    <Card.Title>{profile.last_name + ","}</Card.Title>
                    <div style={{ marginLeft: "0.5rem" }}>
                      <Card.Title>{profile.age}</Card.Title>
                    </div>
                  </div>
                </div>
                <Card.Text>{profile.bio}</Card.Text>
                <Card.Text>{profile.bio}</Card.Text>
                <div id="bottomcontainer">
                  <span className="d-flex justify-content-evenly float-left">
                    <Link to={`/profile/${profile.id}`}>
                      <Button id="button1" variant="primary">
                        Read reviews
                      </Button>
                    </Link>
                    <Button
                      id="button2"
                      variant="primary"
                      onClick={() => onLike(profile)}
                    >
                      Thumbs Up
                    </Button>
                  </span>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Fragment>
    </div>
  );
};
