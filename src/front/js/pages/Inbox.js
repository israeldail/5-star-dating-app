import React, { Fragment, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container, ListGroup } from "react-bootstrap";

const DATE_STATES = {
  ACCEPTED: "accepted",
  REQUESTED: "requested",
  PENDING: "pending",
  UNREQUESTED: "unrequested",
};

const DATE_STATES_ICONS = {
  [DATE_STATES.ACCEPTED]: <FontAwesomeIcon color="green" icon={faCheck} />,
  [DATE_STATES.REQUESTED]: (
    <FontAwesomeIcon color="orange" icon={faHourglass} />
  ),
  [DATE_STATES.PENDING]: <FontAwesomeIcon color="orange" icon={faHourglass} />,
  [DATE_STATES.UNREQUESTED]: "Request Date",
};

const UserCard = ({
  image,
  fullName,
  age,
  bio,
  state = DATE_STATES_ICONS[DATE_STATES.UNREQUESTED],
}) => {
  return (
    <Card style={{ width: "18rem", margin: "2rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{fullName}</Card.Title>
        <Card.Title>{age}</Card.Title>
        <Card.Text>{bio}</Card.Text>
        <Row>
          <Col>
            <Button variant="primary">Review</Button>
          </Col>
          <Col>
            <Button
              disabled={!DATE_STATES.UNREQUESTED === state}
              variant={DATE_STATES.UNREQUESTED === state ? "primary" : "light"}
            >
              {DATE_STATES_ICONS[state]}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const Inbox = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.pendingDates();
    actions.pendingInvitations();
    actions.rehydrate();
  }, []);
  const pendingDateProfiles = store.queue
    .map((profile) => {
      const pendingDate = store.pendingDates.find(
        (date, i) => date.p2_id == profile.id
      );
      return { profile, pendingDate };
    })
    .filter((value) => value.pendingDate);
  return (
    <Container>
      <h2>Pending Dates</h2>
      <Row>
        {pendingDateProfiles.map(({ pendingDate, profile }, index) => {
          console.log(pendingDate, "this is date");
          return (
            <Col>
              <UserCard
                image={profile?.image}
                fullName={`${profile?.first_name} ${profile?.last_name}`}
                age={profile?.age}
                bio={profile?.bio}
                state={DATE_STATES.PENDING}
              />
            </Col>
          );
        })}
      </Row>
      <h2>Requested Dates</h2>
      <Row>
        {pendingDateProfiles.map(({ pendingDate, profile }, index) => {
          console.log(pendingDate, "this is date");
          return (
            <Col>
              <UserCard
                image={profile?.image}
                fullName={`${profile?.first_name} ${profile?.last_name}`}
                age={profile?.age}
                bio={profile?.bio}
                state={DATE_STATES.PENDING}
              />
            </Col>
          );
        })}
      </Row>
      <h2>Matches</h2>
      <Row>
        {pendingDateProfiles.map(({ pendingDate, profile }, index) => {
          console.log(pendingDate, "this is date");
          return (
            <Col>
              <UserCard
                image={profile?.image}
                fullName={`${profile?.first_name} ${profile?.last_name}`}
                age={profile?.age}
                bio={profile?.bio}
                state={DATE_STATES.PENDING}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const InboxPage = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.pendingDates();
    actions.pendingInvitations();
    actions.rehydrate();
  }, []);

  console.log(store.queue);
  return (
    <div>
      <h2
        style={{
          marginTop: "4rem",
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        {" "}
        Dates sent{" "}
      </h2>
      {store.pendingDates?.map((item, index) => {
        console.log(item);

        let profile = store.queue.find(
          (profile, i) => item.p2_id == profile.id
        );
        return (
          <UserCard
            image={profile?.image}
            fullName={`${profile?.first_name} ${profile?.last_name}`}
            age={profile?.age}
            bio={profile?.bio}
            state={DATE_STATES.ACCEPTED}
          />
          // <Card
          //   style={{
          //     width: "50%",
          //     background: "black",
          //     maxHeight: "35rem",
          //     marginBottom: "50px",
          //     margin: "auto",
          //     color: "white",
          //     boxShadow: "5px 10px #888888",
          //     marginTop: "5rem",
          //   }}
          //   key={index}
          // >
          //   <Card.Img
          //     style={{
          //       borderRadius: "50%",
          //       float: "left",
          //       marginLeft: "3rem",
          //       marginTop: "2rem",
          //       height: "300px",
          //       width: "300px",
          //     }}
          //     variant="top"
          //     src={profile?.image}
          //   />
          //   <Card.Body>
          //     <div className="d-flex">
          //       <Card.Title>{profile?.first_name}</Card.Title>
          //       <div className="d-flex" style={{ marginLeft: "0.5rem" }}>
          //         <Card.Title>{profile?.last_name + ","}</Card.Title>
          //         <div style={{ marginLeft: "0.5rem" }}>
          //           <Card.Title>{profile?.age}</Card.Title>
          //         </div>
          //       </div>
          //     </div>

          //     <Card.Text>{profile?.bio}</Card.Text>
          //     <div id="bottomcontainer">
          //       <span className="d-flex justify-content-evenly float-left">
          //         <Link to={`/profile/${profile?.id}`}>
          //           <Button id="button1" variant="primary">
          //             Read reviews
          //           </Button>
          //         </Link>
          //         {item?.p2_accept == null ? (
          //         <div style={{ fontSize: "1rem" }} className="muted-text">
          //           Request Sent{" "}
          //           {<FontAwesomeIcon color="green" icon={faCheck} />}
          //         </div>
          //         ) : (
          //           <div style={{ fontSize: "1rem" }} className="muted-text">
          //           Accepted{" "}
          //           {<FontAwesomeIcon color="green" icon={faCheck} />}
          //         </div>
          //         )}
          //       </span>
          //     </div>
          //   </Card.Body>
          // </Card>
        );
      })}
      <h2
        style={{
          marginTop: "17rem",
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        {" "}
        Pending request{" "}
      </h2>

      {store.pendingInvitations?.map((item, index) => {
        console.log(item);
        console.log(item.uuid, "date id");
        const onAccept = (item) => {
          actions?.accept(item.uuid);
          window.location.reload(false);
        };
        const onReject = (item) => {
          actions?.reject(item.uuid);
        };
        let profile = store.queue.find(
          (profile, i) => item.p1_id == profile.id
        );

        return (
          <Card
            style={{
              width: "50%",
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
