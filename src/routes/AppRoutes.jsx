import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/home.jsx";
import SurfSpots from "../pages/Spots/Spots.jsx";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surf-spots" element={<SurfSpots />} />
      </Routes>
    </BrowserRouter>
  );
}
