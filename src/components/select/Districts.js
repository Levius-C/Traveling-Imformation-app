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
      {cityValue.length < 1 ? (
        <select
          name="city"
          onChange={onChangeHandler}
          className="select select-bordered select-sm max-w-xs"
        >
          <option value="Taipei">臺北市</option>
          <option value="NewTaipei">新北市</option>
          <option value="Keelung">基隆市</option>
          <option value="Taoyuan">桃園市</option>
          <option value="Hsinchu">新竹市</option>
          <option value="HsinchuCounty">新竹縣</option>
          <option value="YilanCounty">宜蘭縣</option>
          <option value="MiaoliCounty">苗栗縣</option>
          <option value="Taichung">臺中市</option>
          <option value="ChanghuaCounty">彰化縣</option>
          <option value="YunlinCounty">雲林縣</option>
          <option value="NantouCounty">南投縣</option>
          <option value="Chiayi">嘉義市</option>
          <option value="ChiayiCounty">嘉義縣</option>
          <option value="Tainan">臺南市</option>
          <option value="Kaohsiung">高雄市</option>
          <option value="PingtungCounty">屏東縣</option>
          <option value="HualienCounty">花蓮縣</option>
          <option value="TaitungCounty">臺東縣</option>
          <option value="PenghuCounty">澎湖縣</option>
          <option value="KinmenCounty">金門縣</option>
          <option value="LienchiangCounty">連江縣</option>
        </select>
      ) : (
        <select
          name="city"
          onChange={onChangeHandler}
          className="select select-bordered select-sm max-w-xs"
        >
          {cityValue?.map((city) => (
            <option value={city.City}>{city.CityName}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Districts;
