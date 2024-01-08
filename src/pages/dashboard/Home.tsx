import TotalAgents from "@/assets/images/totalAgents.png";
import ActiveAgents from "@/assets/images/activeAgents.png";
import TotalSurveys from "@/assets/images/totalSurveys.png";
import OpenSurveys from "@/assets/images/openSurveys.png";
import { useState } from "react";
import AllSurveys from "./Tabs/AllSurveys";
import ActiveSurveys from "./Tabs/ActiveSurveys";
import UnassignedSurveys from "./Tabs/UnassignedSurveys";
import UpcomingMeetings from "./Tabs/UpcomingMeetings";
import Agents from "./Tabs/Agents";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const cardTab = [
  { id: 1, name: "Total Agents", number: 1345, image: TotalAgents },
  { id: 2, name: "Active agents", number: 640, image: ActiveAgents },
  { id: 3, name: "total surveys", number: 600, image: TotalSurveys },
  { id: 4, name: "open surveys", number: 23, image: OpenSurveys },
];

const surveyTab = [
  { id: 1, name: "All Surveys" },
  { id: 2, name: "Active surveys" },
  { id: 3, name: "Unassigned surveys" },
];

const rightTab = [
  { id: 1, name: "All Surveys" },
  { id: 2, name: "Agents" },
];

const Home = () => {
  const [step, setStep] = useState(1);
  const [rightStep, setRightStep] = useState(1);

  const handleTabChange = (e: number) => {
    setStep(e);
  };
  const handleRightTabChange = (e: number) => {
    setRightStep(e);
  };

  const displayStep = () => {
    switch (step) {
      case 1:
        return <AllSurveys />;
      case 2:
        return <ActiveSurveys />;
      case 3:
        return <UnassignedSurveys />;
      default:
    }
  };

  const displayTab = () => {
    switch (rightStep) {
      case 1:
        return <UpcomingMeetings />;
      case 2:
        return <Agents />;

      default:
    }
  };

  return (
    <div>
      <p>Overview</p>

      <div className="grid grid-cols-4 gap-[2em] my-[1em]">
        {cardTab.map((el) => {
          return (
            <div
              className="flex items-center justify-between border-[1px] border-borderGrey rounded-lg p-[2em] bg-white space-x-4 "
              key={`${el.id}--overviewCard`}
            >
              <div className="space-y-2">
                <p className="text-4xl font-semibold">{el.number}</p>
                <p className="uppercase text-sm">{el.name}</p>
              </div>

              <img src={el.image} alt={el.name} className="w-[70px]" />
            </div>
          );
        })}
      </div>

      <div className="flex gap-[2em] pt-2">
        <div className="w-[65%]">
          <div className="flex items-center justify-between">
            <div className="flex sm:space-x-4 space-x-2 ">
              {surveyTab.map((el) => {
                return (
                  <p
                    className={` pb-[4px] px-2 cursor-pointer sm:text-sm text-xs ${
                      step === el.id
                        ? "border-b-[2px] text-auxiliary border-auxiliary font-semibold "
                        : "text-headerGrey"
                    } `}
                    onClick={() => handleTabChange(el.id)}
                    key={el.id}
                  >
                    {el.name}
                  </p>
                );
              })}
            </div>

            <div className="flex items-center space-x-2 text-auxiliary">
              <p className="text-sm">View All</p>
              <HiOutlineArrowNarrowRight />
            </div>
          </div>

          <div>{displayStep()}</div>
          {/* <div className="h-[1px] w-[100%] bg-[#DFE5EC] mb-4"></div> */}
        </div>

        <div className="w-[35%]">
          <div className="flex items-center justify-between">
            <div className="flex sm:space-x-4 space-x-2 ">
              {rightTab.map((el) => {
                return (
                  <p
                    className={` pb-[4px] px-2 cursor-pointer sm:text-sm text-xs ${
                      rightStep === el.id
                        ? "border-b-[2px] text-auxiliary border-auxiliary font-semibold "
                        : "text-headerGrey"
                    } `}
                    onClick={() => handleRightTabChange(el.id)}
                    key={el.id}
                  >
                    {el.name}
                  </p>
                );
              })}
            </div>

            <div className="flex items-center space-x-2 text-auxiliary">
              <p className="text-sm">View All</p>
              <HiOutlineArrowNarrowRight />
            </div>
          </div>

          <div>{displayTab()}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
