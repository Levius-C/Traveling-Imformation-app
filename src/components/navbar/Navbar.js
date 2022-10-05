import React from "react";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setSearchToken, setCurrentPage } = useContext(AppContext);
  const [trigger, setTrigger] = useState(false);
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    setSearchToken(search);
    setCurrentPage(0);
  }, [trigger]);
  return (
    <div>
      <Link to="/">HOME</Link>

      <input
        type="text"
        placeholder="輸入想查詢的關鍵字"
        onChange={submitHandler}
      />
      <button onClick={() => setTrigger(!trigger)}>搜尋</button>
    </div>
  );
};

export default Navbar;
