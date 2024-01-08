import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardRoutes from "./pages/dashboard";
import SurveyRoutes from "./pages/surveys";
import AgentsRoutes from "./pages/agents";
import MeetingRoutes from "./pages/meeting";
import ResourcesRoutes from "./pages/resources";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div className="font-primary">
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
          <Route path="/surveys/*" element={<SurveyRoutes />} />
          <Route path="/agents/*" element={<AgentsRoutes />} />
          <Route path="/meeting/*" element={<MeetingRoutes />} />
          <Route path="/resources/*" element={<ResourcesRoutes />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
