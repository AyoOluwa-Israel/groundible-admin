import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div className="bg-grey h-[calc(100vh-130px)]">
        <div className="w-[90%] mx-auto py-[1em]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
