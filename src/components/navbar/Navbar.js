import React from "react";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setSearchToken, setCurrentPage } = useContext(AppContext);
  const [trigger, setTrigger] = useState(false);
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const submitHandler = (e) => {
    setSearch(e.target.value);
  };
  const openSearch = () => {
    setOpenMenu(!openMenu);
  };
  const searchHandler = () => {
    setTrigger(!trigger);
    openSearch();
  };
  useEffect(() => {
    setSearchToken(search);
    setCurrentPage(0);
  }, [trigger]);
  return (
    <div className=" sticky top-0 z-10 bg-base-100">
      <div className="navbar flex flex-wrap justify-between sticky top-0 z-50 bg-base-100 max-w-screen-xl lg:m-auto">
        <div>
          <Link
            to="/"
            className={
              !openMenu || window.innerWidth > 424
                ? "btn btn-ghost normal-case text-xl"
                : "hidden"
            }
          >
            首頁
          </Link>
        </div>
        <div id="normalSearch" className="hidden md:flex">
          <div className="input-group">
            <input
              type="text"
              placeholder="輸入想查詢的關鍵字"
              onChange={submitHandler}
              className="input input-bordered"
            />
            <button onClick={() => setTrigger(!trigger)} className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div id="mobileSearch" className="inline-block md:hidden">
          <button onClick={openSearch} className={openMenu ? "hidden" : "btn"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className={openMenu ? null : "hidden"}>
            <div className="input-group">
              <input
                type="text"
                placeholder="輸入想查詢的關鍵字"
                onChange={submitHandler}
                className="input input-bordered"
              />
              <button onClick={searchHandler} className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
