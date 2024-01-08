import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const AgentsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AgentsRoutes;
