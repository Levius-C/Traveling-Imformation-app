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
    <div className="flex flex-wrap justify-evenly">
      {props.cityattractions?.map((attaction) => (
        <div className="card sm:w-60 lg:w-80 xl:w-80 bg-base-100 shadow-xl mt-5 hover:bg-[#EBEBEB]">
          <Link
            to="/info"
            onClick={() => (
              setAttactionName(attaction.ScenicSpotName.replace("_", " - ")),
              setAttactionDetail(attaction.DescriptionDetail),
              setAttactionPic(attaction.Picture.PictureUrl1),
              setAttactionPicAlt(attaction.Picture.PictureDescription1)
            )}
          >
            <div className="card-body">
              <h1 className="card-title">
                {attaction.ScenicSpotName.replace("_", " - ")}
              </h1>
            </div>
            <figure>
              <img
                src={attaction.Picture.PictureUrl1}
                alt={attaction.Picture.PictureDescription1}
              />
            </figure>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Cards;
