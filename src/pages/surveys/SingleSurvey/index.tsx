import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import TotalAgents from "@/assets/images/totalAgents.png";
import ActiveAgents from "@/assets/images/activeAgents.png";
import TotalSurveys from "@/assets/images/totalSurveys.png";
import OpenSurveys from "@/assets/images/openSurveys.png";
import IconButton from "@/components/IconButton";
import { ReassignSurveyIcon } from "@/assets/icons";
import { useState } from "react";
import About from "./Tabs/About";
import Responses from "./Tabs/Responses";
import Agents from "./Tabs/Agents";


const cardTab = [
  { id: 1, name: "% of survey completed", number: <p>62%</p>, image: TotalAgents },
  { id: 2, name: "Active agents", number: 5, image: ActiveAgents },
  { id: 3, name: "avg response time", number: <p>4min</p>, image: TotalSurveys },
  { id: 4, name: "responses", number: <div>56/90</div>, image: OpenSurveys },
];

const surveyTab = [
  { id: 1, name: "About" },
  { id: 2, name: "Responses" },
  { id: 3, name: "Agents" },
];

const SingleSurvey = () => {
  const [step, setStep] = useState(1);
  const handleTabChange = (e: number) => {
    setStep(e);
  };

  const displayStep = () => {
    switch (step) {
      case 1:
        return <About />;
      case 2:
        return <Responses />;
      case 3:
        return <Agents />;
      default:
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center space-x-2">
          <HiOutlineArrowLongLeft />
          <p className="text-sm">Back</p>
        </div>

        <div className="py-6 flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div>
              <p className="font-normal text-sm">Version 6ix Trade Fair</p>
              <p className="text-xs text-gray-400 font-light">Version 6ix</p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-[7px] h-[7px] rounded-full bg-green-700 "></div>
              <p className="text-green-700 text-xs font-normal">Active</p>
            </div>
          </div>

          <div>
            <IconButton type="button" text="Reassign survey" icon={<ReassignSurveyIcon />} position="left" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[2em] my-[1em]">
          {cardTab.map((el) => {
            return (
              <div
                className="flex items-center justify-between border-[1px] border-borderGrey rounded-lg p-[2em] py-[1.5em] bg-white space-x-4 "
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
        <div className="flex sm:space-x-4 space-x-2 py-2 ">
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

        
      </div>

      <div>{displayStep()}</div>
      </div>
    </div>
  );
};

export default SingleSurvey;
