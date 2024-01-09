import ActiveAgents from "./Tabs/ActiveAgents";
import AllAgents from "./Tabs/AllAgents";
import { useState } from "react";

const cardTab = [
  { id: 1, name: "Total agents", number: 1345 },
  { id: 2, name: "Active agents", number: 640 },
  { id: 3, name: "Inactive agents", number: 600 },
  { id: 4, name: "Agent locations", number: 23 },
];

const Tab = [
  { id: 1, name: "All Agents " },
  { id: 2, name: "Active Agents" },
];

const Home = () => {
  const [step, setStep] = useState(1);



  const handleTabChange = (e: number) => {
    setStep(e);
  };

 

  const displayStep = () => {
    switch (step) {
      case 1:
        return <AllAgents />;
      case 2:
        return <ActiveAgents />;
      default:
    }
  };

  return (
    <div>
      <p>Agents</p>

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
          {Tab.map((el) => {
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
  );
};

export default Home;
