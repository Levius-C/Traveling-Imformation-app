import React from "react";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import axios from "axios";
import { getAuthorizationHeader } from "../../apitoken";

const Districts = () => {
  const { setCityToken, setCurrentPage } = useContext(AppContext);
  const cityValueURL =
    "https://tdx.transportdata.tw/api/basic/v2/Basic/City?%24format=JSON";
  const [cityValue, setCityValue] = useState([]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setCityToken(e.target.value);
    setCurrentPage(0);
  };

  useEffect(
    () => async () => {
      await axios
        .get(cityValueURL, { headers: await getAuthorizationHeader() })
        .then((res) => {
          setCityValue(...[], res.data);
        });
    },
    []
  );

  return (
    <div className="flex justify-center items-center sm:flex-row md:flex-col ">
      <p className="mr-1">選擇縣市</p>
      <select
        name="city"
        onChange={onChangeHandler}
        className="select select-bordered select-sm max-w-xs"
      >
        {cityValue?.map((city) => (
          <option value={city.City}>{city.CityName}</option>
        ))}
      </select>
    </div>
  );
};

export default Districts;
