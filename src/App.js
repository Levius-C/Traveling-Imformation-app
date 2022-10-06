import "./index.css";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Select from "./components/select/Select";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/main/MainPage";
import Info from "./pages/info/Info";

export const AppContext = createContext();

function App() {
  const [cityToken, setCityToken] = useState("Taipei");
  const [searchToken, setSearchToken] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [attactionName, setAttactionName] = useState("");
  const [attactionDetail, setAttactionDetail] = useState("");
  const [attactionPic, setAttactionPic] = useState("");
  const [attactionPicAlt, setAttactionPicAlt] = useState("");
  console.log(searchToken);
  return (
    <>
      <AppContext.Provider
        value={{
          cityToken,
          setCityToken,
          searchToken,
          setSearchToken,
          currentPage,
          setCurrentPage,
          attactionName,
          setAttactionName,
          attactionDetail,
          setAttactionDetail,
          attactionPic,
          setAttactionPic,
          attactionPicAlt,
          setAttactionPicAlt,
        }}
      >
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="flex sm:flex-col md:flex-row justify-between max-w-screen-xl lg:m-auto">
              <div className="min-w-min">
                <Select />
              </div>
              <div className="mt-10">
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/info" element={<Info />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
