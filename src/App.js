import NewsPage from "./components/newspage/NewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:language/read/:category?" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
