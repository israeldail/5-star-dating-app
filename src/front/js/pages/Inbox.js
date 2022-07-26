import React, { Fragment, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Inbox = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.pendingDates();
    actions.pendingInvitations();

    actions.rehydrate();
  }, []);

  console.log(store.queue);
  return (
    <div>
      <h2 style={{ marginTop: "4rem", textAlign: "center", fontFamily: "Poppins" }}> Dates sent </h2>
      {store.pendingDates?.map((item, index) => {
        console.log(item);

        let profile = store.queue.find(
          (profile, i) => item.p2_id == profile.id
        );
        return (
          <Card
            style={{
              width: "25%",
              background: "black",
              maxHeight: "35rem",
              marginBottom: "50px",
              margin: "auto",
              color: "white",
              boxShadow: "5px 10px #888888",
              marginTop: "5rem",
            }}
            key={index}
          >
            <Card.Img
              style={{
                borderRadius: "50%",
                float: "left",
                marginLeft: "3rem",
                marginTop: "2rem",
                height: "300px",
                width: "300px",
              }}
              variant="top"
              src={profile?.image}
            />
            <Card.Body>
              <div className="d-flex">
                <Card.Title>{profile?.first_name}</Card.Title>
                <div className="d-flex" style={{ marginLeft: "0.5rem" }}>
                  <Card.Title>{profile?.last_name + ","}</Card.Title>
                  <div style={{ marginLeft: "0.5rem" }}>
                    <Card.Title>{profile?.age}</Card.Title>
                  </div>
                </div>
              </div>

              <Card.Text>{profile?.bio}</Card.Text>
              <div id="bottomcontainer">
                <span className="d-flex justify-content-evenly float-left">
                  <Link to={`/profile/${profile?.id}`}>
                    <Button id="button1" variant="primary">
                      Read reviews
                    </Button>
                  </Link>
                  {item?.p2_accept == null ? (
                  <div style={{ fontSize: "1rem" }} className="muted-text">
                    Request Sent{" "}
                    {<FontAwesomeIcon color="green" icon={faCheck} />}
                  </div>
                  ) : (
                    <div style={{ fontSize: "1rem" }} className="muted-text">
                    Accepted{" "}
                    {<FontAwesomeIcon color="green" icon={faCheck} />}
                  </div>
                  )}
                </span>
              </div>
            </Card.Body>
          </Card>
        );
      })}
      <h2 style={{ marginTop: "17rem", textAlign: "center", fontFamily: "Poppins" }}> Pending request </h2>

      {store.pendingInvitations?.map((item, index) => {
        console.log(item);
        console.log(item.uuid, "date id");
        const onAccept = (item) => {
          actions?.accept(item.uuid);
          window.location.reload(false);
        };
        const onReject = (item) => {
          actions?.reject(item.uuid);
          window.location.reload(false);
        };
        let profile = store.queue.find(
          (profile, i) => item.p1_id == profile.id
        );

        return (
          <Card
          style={{
            width: "25%",
            background: "black",
            maxHeight: "35rem",
            marginBottom: "50px",
            margin: "auto",
            color: "white",
            boxShadow: "5px 10px #888888",
            marginTop: "5rem",
          }}
            key={index}
          >
            <Card.Img
              style={{
                borderRadius: "50%",
                float: "left",
                marginLeft: "3rem",
                marginTop: "2rem",
                height: "300px",
                width: "300px",
              }}
              variant="top"
              src={profile?.image}
            />
            <Card.Body>
              <div className="d-flex">
                <Card.Title>{profile?.first_name}</Card.Title>
                <div className="d-flex" style={{ marginLeft: "0.5rem" }}>
                  <Card.Title>{profile?.last_name + ","}</Card.Title>
                  <div style={{ marginLeft: "0.5rem" }}>
                    <Card.Title>{profile?.age}</Card.Title>
                  </div>
                </div>
              </div>

              <Card.Text>{profile?.bio}</Card.Text>
              <div id="bottomcontainer">
                <span className="d-flex justify-content-evenly float-left">
                  <Link to={`/profile/${profile?.id}`}>
                    <Button id="button1" variant="primary">
                      Read reviews
                    </Button>
                  </Link>
                  {item?.p2_accept == true ? (
                    <div>date accepted</div>
                  ) : (
                    <div>
                      <Button
                        onClick={() => {
                          onAccept(item);
                        }}
                        variant="success"
                      >
                        Accept
                      </Button>

                      <Button
                        onClick={() => {
                          onReject(item);
                        }}
                        variant="danger"
                      >
                        Decline
                      </Button>
                    </div>
                  )}
                </span>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
