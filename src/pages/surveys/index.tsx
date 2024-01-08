import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleSurvey from "./SingleSurvey";

const SurveyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleSurvey />} />
      </Routes>
    </div>
  );
};

export default SurveyRoutes;
