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
      <div className="lg:flex justify-center">
        <h2 className="flex  justify-center text-2xl -center md:mr-4">
          共{dataAmount}筆資料
          <br />
        </h2>
        <h2 className="flex  justify-center text-2xl -center">
          顯示第{currentPage * 4 + 1}到
          {currentPage * 4 + 4 > dataAmount ? dataAmount : currentPage * 4 + 4}
          筆
        </h2>
      </div>
      <Cards cityattractions={cityattractions} />
      <div className="mt-10 mb-20 flex justify-evenly items-center">
        <button onClick={prevPage} className="btn btn-xs md:btn-sm lg:btn-md">
          上一頁
        </button>
        <p>
          第{currentPage + 1}頁，共
          {dataAmount % 4 !== 0
            ? Math.floor(dataAmount / 4) + 1
            : dataAmount / 4}
          頁
        </p>
        <button onClick={nextPage} className="btn btn-xs md:btn-sm lg:btn-md ">
          下一頁
        </button>
      </div>
    </div>
  );
};

export default Result;
