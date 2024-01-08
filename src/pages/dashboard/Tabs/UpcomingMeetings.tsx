import { BsCalendar4Week } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalLight, PiTimerLight } from "react-icons/pi";

const unsplashImageUrls = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527538079466-b6297ad15363?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1621659958625-118bff31adcf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const UpcomingMeetings = () => {

  const value = [0, 1, 2, 3, 4, 5]
  return (
    <div className="border-[1px] border-borderGrey bg-white rounded-lg my-[1em] w-[100%]">
      {value.slice(0, 5).map((el, i) => {
        
        return (
          <div className={`flex p-4 justify-between items-center ${ i === 4  ? "" : "border-b-[1px] border-borderGrey "} `} key={`${el}--UpcomingMeetings`}>
            <div className="flex items-center space-x-4">
              <div className="w-[45px] h-[45px] rounded bg-gray-100 border-[1px] border-borderGrey flex items-center justify-center text-lg">
                <BsCalendar4Week />
              </div>

              <div>
                <p className="text-sm">Survey Meeting</p>
                <div className="flex items-center space-x-2 text-gray-400 ">
                  <PiTimerLight />
                  <p className="text-xs font-light">24th, jul 2023</p>
                  <p className="text-xs font-light">10am</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between">
                <p></p>

                <PiDotsThreeOutlineVerticalLight />
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex flex-row items-center">
                  {unsplashImageUrls.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`Profile ${index + 1}`}
                      className={`w-[25px] h-[25px] rounded-full ${index !== 0 ? "-ml-2" : "ml-0"}`}
                    />
                  ))}
                </div>
                <p className="text-xs font-light">+ 20 others</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpcomingMeetings;
