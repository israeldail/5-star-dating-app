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
    window.scrollTo(0, 0);
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
          background: "#fffacd",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet commodo nulla facilisi. Nisl
              pretium fusce id velit ut. Cursus vitae congue mauris rhoncus.
              Diam quis enim lobortis scelerisque fermentum dui faucibus in
              ornare. Felis donec et odio pellentesque diam volutpat commodo sed
              egestas. Suspendisse faucibus interdum posuere lorem ipsum dolor
              sit amet consectetur. Turpis egestas sed tempus urna et pharetra
              pharetra massa massa. eget nulla facilisi etiam
              dignissim. Platea dictumst vestibulum rhoncus est. Pellentesque
              massa placerat duis ultricies. Est sit amet facilisis magna.
              Ornare aenean euismod elementum nisi. Potenti nullam ac tortor
              vitae purus faucibus ornare. Tempus egestas sed sed risus pretium
              quam vulputate. Habitant morbi tristique senectus et netus.
              Aliquet eget sit amet tellus cras adipiscing enim. Quam vulputate
              dignissim suspendisse in. Aliquet bibendum enim facilisis gravida
              neque convallis.
            </div>
          </div>

          <div className="mytabs">
            <input type="radio" id="tabphotos" name="mytabs" />
            <label htmlFor="tabphotos">Photos</label>
            <div className="tab">
              <h2>Photos</h2>
              <div style={{display: "flex", justifyContent: "space-between"}}>
              <img style={{display: "block"}} src="https://picsum.photos/200/300"/>
              <img style={{display: "block"}} src="https://picsum.photos/200/300"/>
              <img style={{display: "block"}} src="https://picsum.photos/200/300"/>
              <img style={{display: "block"}} src="https://picsum.photos/200/300"/>
              <img style={{display: "block"}} src="https://picsum.photos/200/300"/>
              </div>
            </div>
          </div>

          <div className="mytabs">
            <input type="radio" id="tabreviews" name="mytabs" />
            <label htmlFor="tabreviews">Reviews</label>
            <div className="tab">
              <h2>Reviews</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet commodo nulla facilisi. Nisl
              pretium fusce id velit ut. Cursus vitae congue mauris rhoncus.
              Diam quis enim lobortis scelerisque fermentum dui faucibus in
              ornare. Felis donec et odio pellentesque diam volutpat commodo sed
              egestas. Suspendisse faucibus interdum posuere lorem ipsum dolor
              sit amet consectetur. Platea dictumst vestibulum rhoncus est. Pellentesque
              massa placerat duis ultricies. Est sit amet facilisis magna.
              Ornare aenean euismod elementum nisi. Potenti nullam ac tortor
              vitae purus faucibus ornare. Tempus egestas sed sed risus pretium
              quam vulputate. Habitant morbi tristique senectus et netus.
              Aliquet eget sit amet tellus cras adipiscing enim. Quam vulputate
              dignissim suspendisse in. Aliquet bibendum enim facilisis gravida
              neque convallis.
              <Rating rating={rating} onRating={onRating} />
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex flex-column">
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
