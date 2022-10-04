import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Districts = () => {
  const cityValueURL =
    "https://tdx.transportdata.tw/api/basic/v2/Basic/City?%24format=JSON";
  const [cityValue, setCityValue] = useState([]);

  useEffect(() => {
    axios.get(cityValueURL).then((res) => {
      setCityValue(...[], res.data);
    });
  }, []);

  return (
    <select name="city" onChange={() => {}}>
      {cityValue.map((city) => (
        <option value={city.City}>{city.CityName}</option>
      ))}
    </select>
  );
};

export default Districts;
