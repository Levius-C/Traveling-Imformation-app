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
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Select />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
