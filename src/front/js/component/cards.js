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
    actions.rehydrate();
    actions.pendingDates();
  }, []);

  const { store, actions } = useContext(Context);
  const onLike = (profile) => {
    actions.like(profile.id);
    window.location.reload(false);
  };


  // const moveToInbox = (profile) => {
  //   if(store.waiting.includes(profile.id)) {
  //     return console.log("request already sent");
  //   }else{
  //     actions.getName(profile.first_name)
  //   }
  // }

  console.log("yoyoyoyoyoyo", store.queue);


  

  return (
    <div className="d-flex justify-content-evenly flex-column" id="threecards">
      <Fragment>
        {store.queue?.map((profile, i) => {
          return (
            <Card
              style={{
                width: "30rem",
                background: "black",
                maxHeight: "65rem",
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
                <Card.Text>{profile.city}, {profile.country} {profile.zip_code}</Card.Text>
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
                      onClick={() => {
                        onLike(profile);
                      }}
                    >
                      Request Date
                    </Button>
                  </span>
                </div>
              </Card.Body>
            </Card>
          );
        })}
        <Button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} variation="primary">Back to the top</Button>
      </Fragment>
    </div>
  );
};
