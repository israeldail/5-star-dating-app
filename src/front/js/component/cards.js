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
    <Fragment>
      
      {store.getProfile.map((profile, i) => {
        return (
          <Carousel style={{ width: "17rem", height: "25rem", color: "white" }}>
            <Carousel.Item>
              <Card style={{ width: "19rem", background: "black" }}>
                <Card.Img
                  variant="top"
                  src="https://www.criticschoice.com/wp-content/uploads/avatars/610/58b5890a50cfc-bpfull.jpg"
                />
                <Card.Body>
                  <Card.Title>{store.profile.name}</Card.Title>
                  <Card.Text>5'9 but 6ft on a good day</Card.Text>
                  <div className="d-flex justify-content-evenly float-left">
                    <Link to="/Status">
                      <Button variant="primary">Read reviews</Button>
                    </Link>
                    <Button variant="primary">Thumbs Up</Button>
                  </div>
                </Card.Body>
              </Card>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: "18rem", background: "black" }}>
                <Card.Img
                  variant="top"
                  src="data:image/jpeg;base64,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"
                />
                <Card.Body>
                  <Card.Title>{profile.name}</Card.Title>
                  <Card.Text>wild thang</Card.Text>
                  <div className="d-flex justify-content-evenly float-left">
                    <Link to="/Status">
                      <Button variant="primary">Read reviews</Button>
                    </Link>
                    <Button variant="primary">Thumbs Up</Button>
                  </div>
                </Card.Body>
              </Card>

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: "18rem", background: "black" }}>
                <Card.Img
                  variant="top"
                  src="https://yt3.ggpht.com/ytc/AKedOLTPFraXHuDi-6zpBkog_36Mt2PqL0EwOoQU_fneeg=s900-c-k-c0x00ffffff-no-rj"
                />
                <Card.Body>
                  <Card.Title>{profile.name}</Card.Title>
                  <Card.Text>
                    just trying to catch some fish in this sea
                  </Card.Text>
                  <div className="d-flex justify-content-evenly float-left">
                    <Link to="/Status">
                      <Button variant="primary">Read reviews</Button>
                    </Link>
                    <Button variant="primary">Thumbs Up</Button>
                  </div>
                </Card.Body>
              </Card>

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      })}
    </Fragment>
  );
};
