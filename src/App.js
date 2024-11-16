import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import NewsPage from "./components/newspage/NewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:language/read/:category?" element={<NewsPage />} />
        <Route path="/homepage1" element={<Banner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
