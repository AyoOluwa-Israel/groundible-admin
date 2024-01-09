import SearchInput from "@/components/SearchInput";
import { conditionVariable } from "@/constants";
import { TAgentsDashboard } from "@/types/AgentTypes";
import { TColumn } from "@/types/SurveyTypes";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import Skeleton from "react-loading-skeleton";
import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import FilterModal from "../FilterModal";
import { Link } from "react-router-dom";

const AllAgents = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(null);

  const handleModal = (id: number | null) => {
    setOpen(open === id ? null : id);
  };

  const columns: TColumn[] = [
    {
      field: "image",
      header: "",
    },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "qualification", header: "Qualification" },
    { field: "location", header: "Location" },
    { field: "dateJoined", header: "Date joined" },
    { field: "gender", header: "Gender" },
    { field: "status", header: "Status" },
    { field: "more", header: "More" },
  ];

  const agentsData: TAgentsDashboard[] = [
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
      name: (
        <div>
          <Link to="israel" className="font-normal text-sm hover:underline cursor-pointer">
            Adeleke Israel
          </Link>
        </div>
      ),
      email: "johnibukun@gmail.com",
      qualification: "Msc",
      location: (
        <div>
          <p className="font-normal text-sm">Landmark, lagos Nigeria</p>
        </div>
      ),
      dateJoined: (
        <div>
          <p className="font-normal text-sm">2nd Aug 2023</p>
        </div>
      ),
      gender: "M",
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
    <div>
      <div className="flex justify-between my-[1em]">
        <div className="w-[350px]">
          <SearchInput
            name="query"
            value={query}
            type="text"
            placeholder="Search for agents"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div
          className=" border-gray-400 border-[1px] rounded h-[40px] flex items-center bg-white text-gray-500 w-[110px] justify-center space-x-2 cursor-pointer"
          onClick={() => handleModal(1)}
        >
          <BsFilter className="text-xl" />
          <p className="text-xs">Filter by</p>
        </div>
      </div>

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
                  <tr
                    key={i}
                    className="h-[50px]  text-ss text-[#404040] font-[400] border-b-[1px] border-borderGrey  "
                  >
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
                        {row[col.field as keyof TAgentsDashboard]}
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

      {open === 1 ? <FilterModal handleModal={() => handleModal(1)} /> : null}
    </div>
  );
};

export default AllAgents;
