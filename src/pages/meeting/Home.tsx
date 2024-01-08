import TotalAgents from "@/assets/images/totalAgents.png";
import ActiveAgents from "@/assets/images/activeAgents.png";
import TotalSurveys from "@/assets/images/totalSurveys.png";
import OpenSurveys from "@/assets/images/openSurveys.png";


const cardTab = [
  {id: 1,  name: "Total Agents", number: 1345, image: TotalAgents},
  {id: 2,  name: "Active agents", number: 640, image: ActiveAgents},
  {id: 3,  name: "total surveys", number: 600, image: TotalSurveys},
  {id: 4,  name: "open surveys", number: 23, image: OpenSurveys},
]

const Home = () => {
  return (
    <div>
      <p>Overview</p>

      <div className="grid grid-cols-4 gap-[2em] my-[1em]">
        {
          cardTab.map((el) => {
            return(
              <div className="flex items-center justify-between border-[1px] border-borderGrey rounded-lg p-[2em] bg-white space-x-4 " key={`${el.id}--overviewCard`}>
              <div className="space-y-2">
                <p className="text-4xl font-semibold">{el.number}</p>
                <p className="uppercase">{el.name}</p>
              </div>
    
              <img src={el.image} alt={el.name} className="w-[70px]" />
            </div>
            )
          })
        }
       
      </div>
    </div>
  );
};

export default Home;
