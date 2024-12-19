import { Navigate, Route, Routes } from "react-router-dom";
import { HotelsList } from "./pages/HotelsList";
import { HotelDetail } from "./pages/HotelDetail";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/hotels" element={<HotelsList />} />
      <Route path="/hotels/:id" element={<HotelDetail />} />
      <Route path="*" element={<Navigate to="/hotels" />} />
    </Routes>
  );
};

export default App;
