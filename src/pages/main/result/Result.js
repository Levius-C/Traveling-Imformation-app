import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../App";
import axios from "axios";
import { getAuthorizationHeader } from "../../../apitoken";
import Cards from "./Cards";

const Result = () => {
  const { searchToken, cityToken, currentPage, setCurrentPage } =
    useContext(AppContext);
  const filterToken = `%24filter=contains(ScenicSpotName,'${searchToken}')&`;
  const [nextPageToken, setNextPageToken] = useState(`%24skip=0&`);
  const resultURL = `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${cityToken}?${filterToken}%24top=4&${nextPageToken}%24format=JSON`;
  const lengthURL = `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${cityToken}?${filterToken}%24format=JSON`;
  const [cityattractions, setCityattraction] = useState(null);
  const [dataAmount, setDataAmount] = useState(0);

  const prevPage = () => {
    currentPage !== 0 && setCurrentPage(currentPage - 1);
    setNextPageToken(`%24skip=${(currentPage - 1) * 4}&`);
  };
  const nextPage = () => {
    currentPage * 4 + 4 > dataAmount || setCurrentPage(currentPage + 1);
    currentPage * 4 + 4 > dataAmount ||
      setNextPageToken(`%24skip=${(currentPage + 1) * 4}&`);
  };

  useEffect(() => {
    const fetchdata = async () =>
      await axios
        .get(resultURL, { headers: await getAuthorizationHeader() })
        .then((res) => {
          setCityattraction(res.data);
        });
    fetchdata();
  }, [cityToken, filterToken, nextPageToken]);
  useEffect(() => {
    const fetchdata = async () =>
      await axios
        .get(lengthURL, { headers: await getAuthorizationHeader() })
        .then((res) => {
          setDataAmount(res.data.length);
        });
    fetchdata();
  }, [resultURL]);

  return (
    <div>
      <h2>
        {dataAmount}筆資料中的第{currentPage * 4 + 1}到
        {currentPage * 4 + 4 > dataAmount ? dataAmount : currentPage * 4 + 4}筆
      </h2>
      <button onClick={prevPage}>上一頁</button>第{currentPage + 1}頁，共
      {dataAmount % 4 !== 0 ? Math.floor(dataAmount / 4) + 1 : dataAmount / 4}頁
      <button onClick={nextPage}>下一頁</button>
      <Cards cityattractions={cityattractions} />
    </div>
  );
};

export default Result;
