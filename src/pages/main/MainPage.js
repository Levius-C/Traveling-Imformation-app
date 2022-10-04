import { useState } from "react";
import Result from "../../components/result/Result";
import Select from "../../components/select/Select";

const MainPage = () => {
  const [cityToken, setCityToken] = useState("Taipei");
  console.log(cityToken);
  return (
    <div>
      <Select setCityToken={setCityToken} />
      <Result cityToken={cityToken} />
    </div>
  );
};

export default MainPage;
