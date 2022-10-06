import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

export const Info = () => {
  const { attactionName, attactionDetail, attactionPic, attactionPicAlt } =
    useContext(AppContext);
  const nav = useNavigate();
  return (
    <div className="sm:p-4 md:pr-8 lg:px-10 flex-col justify-evenly">
      <h1 className="sm:text-lg md:text-3xl lg:text-4xl mb-4 font-bold">
        {attactionName}
      </h1>
      <p className="md:text-lg mb-4">{attactionDetail}</p>
      <img src={attactionPic} alt={attactionPicAlt} className="mb-4" />
      <button
        onClick={() => {
          nav("/");
        }}
        className="flex flex-end btn btn-sm md:btn-md "
      >
        返回
      </button>
    </div>
  );
};

export default Info;
