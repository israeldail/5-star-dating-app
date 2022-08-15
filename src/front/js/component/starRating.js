import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

export const Rating = ({ rating = 0, onRating }) => {
  const [hoveringIndex, setHoveringIndex] = useState(0);
  const mapper = (value, index) => {
    const isSelected = index + 1 <= rating;
    return { isSelected, color: isSelected ? "yellow" : "#808080" };
  };
  const ratings = new Array(5).fill({}).map(mapper);
  const onMouseOver = (index) => {
    setHoveringIndex(index);
  };
  const onMouseLeave = () => {
    setHoveringIndex(0);
  };
  return (
    <div id="stars" className="d-flex">
      {ratings.map(({ color }, index) => (
        <FontAwesomeIcon
          onMouseOver={() => onMouseOver(index + 1)}
          onMouseLeave={onMouseLeave}
          onClick={() => onRating(index + 1)}
          color={hoveringIndex >= index + 1 ? "yellow" : color}
          key={index}
          icon={faStarSolid}
        />
      ))}
    </div>
  );
};
