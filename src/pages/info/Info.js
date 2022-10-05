import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";

export const Info = () => {
  const { attactionName, attactionDetail, attactionPic, attactionPicAlt } =
    useContext(AppContext);
  return (
    <div>
      <h1>{attactionName}</h1>
      <p>{attactionDetail}</p>
      <img src={attactionPic} alt={attactionPicAlt} />
    </div>
  );
};

export default Info;
