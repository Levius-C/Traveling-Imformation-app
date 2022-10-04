import React from "react";

const Cards = (props) => {
  return (
    <div>
      {props.cityAttractions?.map((attaction) => (
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
