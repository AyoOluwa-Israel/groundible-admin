import { TAllSurveyDashboard, TColumn } from "@/types/SurveyTypes";
import Skeleton from "react-loading-skeleton";
import { PiTimerLight } from "react-icons/pi";
import { conditionVariable } from "@/constants";

const AllSurveys = () => {
  const columns: TColumn[] = [
    {
      field: "image",
      header: "",
    },
    { field: "title", header: "Title" },
    { field: "locationDate", header: "Location / Date" },
    { field: "responses", header: "Responses" },
    { field: "activeAgents", header: "Active Agents" },
    { field: "status", header: "Status" },
  ];

  const surveyData: TAllSurveyDashboard[] = [
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
      title: (
        <div>
          <p className="font-normal text-sm">Version 6ix Trade Fair</p>
          <p className="text-xs text-gray-400 font-light">Version 6ix</p>
        </div>
      ),
      locationDate: (
        <div>
          <p className="font-normal text-sm">Landmark, lagos Nigeria</p>
          <div className="flex items-center space-x-2 text-gray-400 ">
            <PiTimerLight />
            <p className="text-xs font-light italic">24th, jul 2023</p>
          </div>
        </div>
      ),
      responses: <p className="font-normal text-sm">12/900</p>,
      activeAgents: <p className="font-normal text-sm">32/45</p>,
      status: (
        <div className="flex items-center space-x-2">
          <div className="w-[10px] h-[10px] rounded-full bg-green-700 "></div>
          <p className="text-green-700 text-xs font-normal">Active</p>
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
              {surveyData?.map((row, i) => (
                <tr
                  key={i}
                  className={`h-[70px] text-ss  text-[#404040] font-[500] ${
                    surveyData.length - 1 === i ? "" : "border-b-[1px] border-borderGrey "
                  } `}
                >
                  {/* <Link to={`./analytics/${row.id}`} key={i}> */}
                  {columns?.map((col, i) => (
                    <td key={i} className={`pl-2 `}>
                      {row[col.field as keyof TAllSurveyDashboard]}
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

export default AllSurveys;
