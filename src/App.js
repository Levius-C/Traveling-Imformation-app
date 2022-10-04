import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/main/MainPage";
import Info from "./pages/info/Info";

function App() {
  const fetchURL =
    "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/NewTaipei?%24top=30&%24format=JSON";
  axios.get(fetchURL).then((res) => {
    console.log(res.data);
  });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
