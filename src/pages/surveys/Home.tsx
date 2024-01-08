import TotalAgents from "@/assets/images/totalAgents.png";
import ActiveAgents from "@/assets/images/activeAgents.png";
import TotalSurveys from "@/assets/images/totalSurveys.png";
import OpenSurveys from "@/assets/images/openSurveys.png";
import { useState } from "react";
import AllSurveys from "./Tabs/AllSurveys";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const cardTab = [
  { id: 1, name: "Total surveys", number: 73, image: TotalAgents },
  { id: 2, name: "Active surveys", number: 5, image: ActiveAgents },
  { id: 3, name: "unassigned surveys", number: 5, image: TotalSurveys },
  { id: 4, name: "completed surveys", number: 45, image: OpenSurveys },
];

const surveyTab = [
  { id: 1, name: "All Surveys" },
  { id: 2, name: "Active surveys" },
  { id: 3, name: "Unassigned surveys" },
  { id: 4, name: "Closed surveys" },
];

const Home = () => {
  const [step, setStep] = useState(1);
  const handleTabChange = (e: number) => {
    setStep(e);
  };

  const displayStep = () => {
    switch (step) {
      case 1:
        return <AllSurveys />;
      // case 2:
      //   return <ActiveSurveys />;
      // case 3:
      //   return <UnassignedSurveys />;
      default:
    }
  };

  return (
    <div>
      <p>Surveys</p>

      <div className="grid grid-cols-4 gap-[2em] my-[1em]">
        {cardTab.map((el) => {
          return (
            <div
              className="flex items-center justify-between border-[1px] border-borderGrey rounded-lg p-[2em]  py-[1.5em]  bg-white space-x-4 "
              key={`${el.id}--overviewCard`}
            >
              <div className="space-y-2">
                <p className="text-4xl font-semibold">{el.number}</p>
                <p className="uppercase text-sm">{el.name}</p>
              </div>

              {/* <img src={el.image} alt={el.name} className="w-[70px]" /> */}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex sm:space-x-4 space-x-2 ">
          {surveyTab.map((el) => {
            return (
              <p
                className={` pb-[4px] px-2 cursor-pointer sm:text-sm text-xs ${
                  step === el.id ? "border-b-[2px] text-auxiliary border-auxiliary font-semibold " : "text-headerGrey"
                } `}
                onClick={() => handleTabChange(el.id)}
                key={el.id}
              >
                {el.name}
              </p>
            );
          })}
        </div>

        <div className="flex items-center space-x-2 text-secondary">
          <p className="text-sm">View All</p>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>

      <div>{displayStep()}</div>
    </div>
  );
};

export default Home;
