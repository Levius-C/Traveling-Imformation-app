import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthorizationHeader } from "../../apitoken";
import Cards from "./Cards";

const Result = (props) => {
  const resultURL = `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${props.cityToken}?%24top=30&%24format=JSON`;
  const [cityAttractions, setCityAttraction] = useState(null);
  useEffect(() => {
    const fetchdata = async () =>
      await axios
        .get(resultURL, { headers: await getAuthorizationHeader() })
        .then((res) => {
          setCityAttraction(res.data);
        });
    fetchdata();
  }, [props.cityToken]);

  return (
    <>
      <Cards cityAttractions={cityAttractions} />
    </>
  );
};

export default Result;
