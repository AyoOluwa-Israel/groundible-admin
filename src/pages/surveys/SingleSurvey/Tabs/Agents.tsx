import { conditionVariable } from "@/constants";
import { TAgents } from "@/types/AgentTypes";
import { TColumn } from "@/types/SurveyTypes";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import Skeleton from "react-loading-skeleton";

const Agents = () => {
  const columns: TColumn[] = [
    {
      field: "image",
      header: "",
    },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "location", header: "Location" },
    { field: "completionTime", header: "Avg completion time" },
    { field: "responses", header: "Responses" },
    { field: "status", header: "Status" },
    { field: "more", header: "More" },
  ];

  const agentsData: TAgents[] = [
    {
      image: (
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      ),
      name: "Adebimpe Johnson",
      email: "Adebimpe@gmail.com",
      location: (
        <div>
          <p className="font-normal text-sm">Landmark, lagos Nigeria</p>
        </div>
      ),
      completionTime: (
        <div>
          <p className="font-normal text-sm">4min</p>
        </div>
      ),
      responses: <p className="font-normal text-sm">12/900</p>,
      status: (
        <div className="flex items-center space-x-2">
          <div className="w-[10px] h-[10px] rounded-full bg-green-700 "></div>
          <p className="text-green-700 text-xs font-normal">Active</p>
        </div>
      ),
      more: (
        <div>
          <PiDotsThreeOutlineVerticalLight />
        </div>
      ),
    },
  ];

  return (
    <div className="border-[1px] border-borderGrey bg-white rounded-lg my-[1em] ">
      <table className="w-[100%]  ">
        <thead className="h-[60px] text-s border-b-[1px] border-borderGrey ">
          <tr className="h-[60px]">
            {columns &&
              columns.map((head, i) => (
                <th key={i} className="px-2 text-left font-normal text-gray-500 text-sm">
                  {head.header}
                </th>
              ))}
          </tr>
        </thead>

        <tbody>
          {conditionVariable ? (
            <>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                <tr key={i} className="h-[50px]  text-ss text-[#404040] font-[400] border-b-[1px] border-borderGrey  ">
                  {columns?.map((_, i) => (
                    <td key={i} className="pl-2  relative">
                      <Skeleton />
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ) : (
            <>
              {agentsData?.map((row, i) => (
                <tr
                  key={i}
                  className={`h-[70px] text-ss  text-[#404040] font-[500] ${
                    agentsData.length - 1 === i ? "" : "border-b-[1px] border-borderGrey "
                  } `}
                >
                  {/* <Link to={`./analytics/${row.id}`} key={i}> */}
                  {columns?.map((col, i) => (
                    <td key={i} className={`pl-2 text-sm font-normal`}>
                      {row[col.field as keyof TAgents]}
                    </td>
                  ))}
                  {/* </Link> */}
                </tr>
                // </Link>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Agents;
