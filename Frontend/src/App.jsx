import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreateSiswaPage from "./pages/CreateSiswaPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/create" element={<CreateSiswaPage />} />
    </Routes>
  );
};

export default App;
