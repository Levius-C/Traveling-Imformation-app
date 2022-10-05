import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../App";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const {
    setAttactionName,
    setAttactionDetail,
    setAttactionPic,
    setAttactionPicAlt,
  } = useContext(AppContext);

  return (
    <div>
      {props.cityattractions?.map((attaction) => (
        <Link
          to="/info"
          onClick={() => (
            setAttactionName(attaction.ScenicSpotName.replace("_", " - ")),
            setAttactionDetail(attaction.DescriptionDetail),
            setAttactionPic(attaction.Picture.PictureUrl1),
            setAttactionPicAlt(attaction.Picture.PictureDescription1)
          )}
        >
          <h1>{attaction.ScenicSpotName.replace("_", " - ")}</h1>
          <img
            src={attaction.Picture.PictureUrl1}
            alt={attaction.Picture.PictureDescription1}
          />
        </Link>
      ))}
    </div>
  );
};
export default Cards;
