import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SelectInput from "@/components/Input/SelectInput";
import ModalWithClose from "@/components/Modals/ModalWithClose";
import { educationArray, genderData, surveyStatus } from "@/constants/kycData";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

type TProps = {
  handleModal: () => void;
};

const FilterModal: React.FC<TProps> = ({ handleModal }) => {
  return (
    <ModalWithClose onClose={handleModal}>
      <div className="w-[400px]">
        <div className="grid grid-cols-2 w-[100%] gap-4 mt-6">
          <div className="">
            <SelectInput label="Location" options={options} name="test-select" value="option2" onChange={() => {}} />
          </div>

          <div className="">
            <SelectInput label="Gender" options={genderData} name="test-select" value="option2" onChange={() => {}} />
          </div>

          <div className="">
            <SelectInput
              label="Qualification"
              options={educationArray}
              name="test-select"
              value="option2"
              onChange={() => {}}
            />
          </div>

          <div className="">
            <SelectInput label="Status" options={surveyStatus} name="test-select" value="option2" onChange={() => {}} />
          </div>
        </div>

        <div className="flex justify-between items-center pt-[2em]">
          <div></div>

          <div className="space-x-4 ">
            <PrimaryButton text="Reset filter" type="button" css="text-primary bg-white" />

            <PrimaryButton text="Apply filter" type="button" css="text-primary bg-secondary" />
          </div>
        </div>
      </div>
    </ModalWithClose>
  );
};

export default FilterModal;
