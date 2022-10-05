import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div>
      {props.cityattractions?.map((attaction) => (
        <div>
          <h1>{attaction.ScenicSpotName}</h1>
          <img
            src={attaction.Picture.PictureUrl1}
            alt={attaction.Picture.PictureDescription1}
          />
        </div>
      ))}
    </div>
  );
};
export default Cards;
