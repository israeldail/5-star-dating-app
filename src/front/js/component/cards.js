import React, { Fragment, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Cards = (props) => {
  useEffect(() => {
    actions.getProfile();
  }, []);

  const { store, actions } = useContext(Context);
  return (
    <div className="d-flex justify-content-evenly" id="threecards">
      <Fragment>
        <Carousel style={{ width: "auto", maxHeight: "35rem", color: "white" }}>
          {store.profiles.map((profile, i) => {
            return (
              <Carousel.Item key={i}>
                <Card
                  style={{
                    width: "35rem",
                    background: "black",
                    maxHeight: "55rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={profile.image}
                  />
                  <Card.Body>
                    <Card.Title>{profile.name}</Card.Title>
                    {/* <div><i class="fa-solid fa-star"></i></div> */}
                    <Card.Text>{profile.bio}</Card.Text>
                    <Card.Text>
                      {profile.bio}
                    </Card.Text>
                    <div id="bottomcontainer">
                      
                      <span className="d-flex justify-content-evenly float-left">
                        <Link to={`/profile/${profile.id}`}>
                          <Button id="button1" variant="primary">
                            Read reviews
                          </Button>
                        </Link>
                        <Button id="button2" variant="primary">
                          Thumbs Up
                        </Button>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Fragment>
    </div>
  );
};
