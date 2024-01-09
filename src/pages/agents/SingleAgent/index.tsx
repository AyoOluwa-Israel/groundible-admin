import { useState } from "react";
import Survey from "./Tabs/Survey";
import TrainingMaterials from "./Tabs/TrainingMaterials";
import IconButton from "@/components/IconButton";
import { ReassignSurveyIcon } from "@/assets/icons";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { GoLock, GoTrash } from "react-icons/go";

const cardTab = [
  { id: 1, name: "% of survey completed", number: <p>62%</p> },
  { id: 2, name: "Active agents", number: 5 },
  { id: 3, name: "avg response time", number: <p>4min</p> },
  { id: 4, name: "responses", number: <div>56/90</div> },
];

const surveyTab = [
  { id: 1, name: "Surveys" },
  { id: 2, name: "Training Materials" },
];

const personalInfo = [
  { tag: "Phone number", info: "+234 906 807 5097" },
  { tag: "Email", info: "Johnson@gmail.com" },
  { tag: "Age (DOB)", info: "25 (24th Mar, 1998)" },

  { tag: "Language(s)", info: "English, Spanish, French" },
  { tag: "Agent ID", info: "AGT001" },
  { tag: "Occupation", info: "Marketer" },
  { tag: "Education level", info: "Msc" },
];

const SingleAgent = () => {
  const [step, setStep] = useState(1);
  const handleTabChange = (e: number) => {
    setStep(e);
  };

  const displayStep = () => {
    switch (step) {
      case 1:
        return <Survey />;
      case 2:
        return <TrainingMaterials />;
      default:
    }
  };
  return (
    <div>
      <div className="overflow-y-scroll">
        <div className="flex items-center space-x-2">
          <HiOutlineArrowLongLeft />
          <p className="text-sm">Back</p>
        </div>

        <div className="py-6 flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div>
              <p className="font-normal text-sm">Adeleke Israel</p>

              <div className="flex  space-x-2">
                <p className="text-xs text-gray-400 font-light">Male</p>

                <div className="flex items-center space-x-2">
                  <div className="w-[7px] h-[7px] rounded-full bg-green-700 "></div>
                  <p className="text-green-700 text-xs font-normal">Active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <IconButton type="button" text="Assign agent to survey" icon={<ReassignSurveyIcon />} position="left" />

            <IconButton type="button" text="Suspend" icon={<GoLock />} position="left" />

            <IconButton
              type="button"
              text="Delete Profile"
              icon={<GoTrash />}
              position="left"
              css="bg-red-500 text-white"
            />
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

        <div className="flex gap-[2em]">
          <div className="border-[1px] border-borderGrey bg-white rounded-lg my-[1em] w-[30%] p-4">
            <p className="text-sm">Personal Information</p>

            <div>
              {personalInfo.map((el, i) => {
                return (
                  <div className="text-sm flex justify-between py-3 " key={`${i}--personalInfo`}>
                    <p className="text-gray-500">{el.tag}</p>
                    <p className="w-[50%]">{el.info}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {displayStep()}
        </div>
      </div>
    </div>
  );
};

export default SingleAgent;
