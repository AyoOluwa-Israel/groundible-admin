import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const MeetingRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MeetingRoutes;
