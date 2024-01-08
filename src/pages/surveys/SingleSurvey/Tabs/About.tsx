const About = () => {
  const data = [
    { id: 1, name: "Survey name", desc: "Version 6ix Trade fair" },
    { id: 2, name: "Location", desc: "Landmark, lagos Nigeria" },
    { id: 3, name: "Description", desc: "Nemo enim ipsam voluptatem " },
    { id: 4, name: "Published", desc: "2nd Aug 2023, 4:00pm" },
    { id: 5, name: "Category", desc: "Product Marketing" },
    { id: 6, name: "Scheduled for", desc: "10th Aug 2023, 1:00pm" },
    { id: 7, name: "Targeted response", desc: "90" },
    { id: 8, name: "Questions", desc: "12" },
  ];
  return (
    <div className="w-[100%] bg-white border-gray-500 border-[1px] rounded-md my-4">
      <div className="grid grid-cols-2 w-[100%] gap-x-[3em] p-3 text-sm ">
        {data.map((el, i) => {
          return (
            <div
              className={`flex items-center p-4 py-5 w-[100%] justify-between ${
                data.length-1 === i || data.length-2 === i ? "" : "border-b-[1px] border-gray-500 "
              }`}
              key={`${el.id}--SurveyData`}
            >
              <p className="text-gray-400">{el.name}</p>
              <p className="text-primary">{el.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
