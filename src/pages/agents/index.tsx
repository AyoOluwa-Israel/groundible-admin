import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleAgent from "./SingleAgent";

const AgentsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleAgent />} />
      </Routes>
    </div>
  );
};

export default AgentsRoutes;
