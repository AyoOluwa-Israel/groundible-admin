import { AgentsIcon, DashboardIcon, MeetingsIcon, NotificationIcon, ResourcesIcon, SurveyIcon } from "@/assets/icons";
import Logo from "@/assets/images/logo.png";
import { FaCaretDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const tabs = [
  { id: 1, name: "Dashboard", icons: DashboardIcon, path: "/dashboard" },
  { id: 2, name: "Surveys", icons: SurveyIcon, path: "/surveys" },
  { id: 3, name: "Agents", icons: AgentsIcon, path: "/agents" },
  { id: 4, name: "Meeting", icons: MeetingsIcon, path: "/meeting" },
  { id: 5, name: "Resources", icons: ResourcesIcon, path: "/resources" },
];

const activeStyles = "flex items-center space-x-2 text-secondary border-b-[4px] border-secondary h-[60px] px-2";

const notActiveStyles =
  "flex items-center space-x-2 text-white h-[60px] cursor-pointer hover:text-secondary group fill-white hover:fill-secondary hover:border-b-[4px] hover:border-secondary ";

const Header = () => {
  return (
    <div className="bg-primary h-[130px] w-full">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between h-[70px] ">
          <img src={Logo} alt="logo" className="w-[180px]" />

          <div className="text-white flex items-center space-x-3">
            <NotificationIcon />

            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <p>Toni Dada</p>
            <FaCaretDown />
          </div>
        </div>

        <div className="flex items-center space-x-[3em] h-[60px]">
          {tabs.map((el) => {
            const IconComponent = el.icons;

            return (
              <NavLink to={el.path} key={`${el.id}--appRoute`} className="hover:text-secondary">
                {({ isActive }) => (
                  <div className={isActive ? activeStyles : notActiveStyles}>
                    <IconComponent fillColor={isActive ? "fill-secondary " : "fill-white hover:fill-secondary"} />
                    <p className="text-sm">{el.name}</p>
                  </div>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
