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
          {store.profile.map((profile, i) => {
            return (
              <Carousel.Item key={i}>
                <Card
                  style={{
                    width: "18rem",
                    background: "black",
                    maxHeight: "45rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://www.criticschoice.com/wp-content/uploads/avatars/610/58b5890a50cfc-bpfull.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{profile.name}</Card.Title>
                    {/* <div><i class="fa-solid fa-star"></i></div> */}
                    <Card.Text>{profile.bio}</Card.Text>
                    <Card.Text>
                      WT0frqkhi8UFVmO5dbcSdw8ZS61Vmcs29iSZ3HDlK34OTlUaQVjxGLHyknFFEYIAGKKKACiEUV4AGbOAxLUqiOu9GB8DqJqiOnH0dTo9M7KxS16KVENwwB8R
                    </Card.Text>
                    <div className="bottomcontainer">
                      <div id="stars" className="d-flex">
                        <div>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div>
                          <i class="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <span className="d-flex justify-content-evenly float-left">
                        <Link to="/status">
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
