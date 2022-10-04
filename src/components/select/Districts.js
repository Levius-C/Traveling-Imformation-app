import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getAuthorizationHeader } from "../../apitoken";

const Districts = (props) => {
  const cityValueURL =
    "https://tdx.transportdata.tw/api/basic/v2/Basic/City?%24format=JSON";
  const [cityValue, setCityValue] = useState([]);

  const selectHandler = (e) => {
    props.setCityToken(e.target.value);
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
    <select name="city" onChange={selectHandler}>
      {cityValue?.map((city) => (
        <option value={city.City}>{city.CityName}</option>
      ))}
    </select>
  );
};

export default Districts;
