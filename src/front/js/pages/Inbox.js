import React, { Fragment, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Inbox = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.pendingDates();
    // actions.getName();
  }, []);
  console.log(store.pendingDates, "array data");
  console.log(store.queue);
  return (
    <div>
      {store.pendingDates.map((item, index) => {
        console.log(item);
       let profile = store.queue.find((profile, i) => item.p1_id == profile.id)
          

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
                key={index}
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
                  <div id="bottomcontainer">
                    <span className="d-flex justify-content-evenly float-left">
                      <Link to={`/profile/${profile.id}`}>
                        <Button id="button1" variant="primary">
                          Read reviews
                        </Button>
                      </Link>
                      <Button> accepted</Button>
                    </span>
                  </div>
                </Card.Body>
              </Card>
            );
          
        
      })}
    </div>
  );
};
