import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/inedx";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:newsId" element={<NewsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
