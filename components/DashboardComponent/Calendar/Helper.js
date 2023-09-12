import { AiOutlineClockCircle } from "react-icons/ai";

////Generate time slot///////
export function generateTimeSlots() {
  const timeSlots = [];
  timeSlots.push(
    <div className="min-h-[40px] border-b border-b-gray-200 flex items-center mb-3" key={"gmt-4"}>
      <AiOutlineClockCircle />
    </div>
  );
  for (let hour = 0; hour <= 23; hour++) {
    let timestatus = hour > 11 ? "pm" : "am";
    let time = hour > 12 ? hour - 12 : hour;
    time = hour == 0 ? 12 : time;

    timeSlots.push(
      <div className="min-h-[40px] border-b border-b-gray-200 flex items-center justify-end w-7 font-spartan" key={hour}>
        <span>{time}</span> <span className="text-sm ml-1">{timestatus}</span>
      </div>
    );
  }
  return timeSlots;
}

///////////////// Schdeule ///////////////////
export function generateSchedule(date, projects) {
  const correspondingDateProjects = projects?.filter((project) => {
    const convertedStartDate = new Date(project.startDate);
    const convertedEndDate = new Date(project.endDate);
    const isStartDateMatch = convertedStartDate.getFullYear() === date.getFullYear() && convertedStartDate.getMonth() === date.getMonth() && convertedStartDate.getDate() === date.getDate();
    const isEndDateMatch = convertedEndDate.getFullYear() === date.getFullYear() && convertedEndDate.getMonth() === date.getMonth() && convertedEndDate.getDate() === date.getDate();

    return isStartDateMatch || isEndDateMatch;
  });

  const todaysDate = new Date();
  let checker = todaysDate.getDate() == date.getDate() && todaysDate.getMonth() == date.getMonth();

  const daysOfWeekAbbreviated = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const scheduleSlots = [];
  scheduleSlots.push(
    <div className={`min-h-[40px] border-b border-b-gray-200 ${checker && "border-b-cstColor-200 border-b-2"} flex items-center px-2 w-40 mb-3`} key={"gmt-4"}>
      <h1 className={`text-2xl font-righteous ${checker && "text-cstColor-200"}`}>
        {date.getDate()} <span className="font-spartan text-lg">{daysOfWeekAbbreviated[date.getDay()]}</span>
      </h1>
    </div>
  );
  for (let hour = 0; hour <= 23; hour++) {
    const info = {
      time: "",
      type: "",
      title: "",
    };
    correspondingDateProjects.forEach((element) => {
      const convertedStartDate = new Date(element.startDate);
      const convertedEndDate = new Date(element.endDate);
      const isStartDateMatch = convertedStartDate.getFullYear() === date.getFullYear() && convertedStartDate.getMonth() === date.getMonth() && convertedStartDate.getDate() === date.getDate();
      const isEndDateMatch = convertedEndDate.getFullYear() === date.getFullYear() && convertedEndDate.getMonth() === date.getMonth() && convertedEndDate.getDate() === date.getDate();

      if (isStartDateMatch && convertedStartDate.getHours().toString() == hour.toString()) {
        info.time = convertedStartDate.getHours();
        info.type = "start";
        info.title = element.title;
      }
      if (isEndDateMatch && convertedStartDate.getHours().toString() == hour.toString()) {
        info.time = convertedEndDate.getHours();
        info.type = "end";
        info.title = element.title;
      }
    });
    scheduleSlots.push(
      <div
        className={`min-h-[40px] border-b border-b-gray-200 rounded-lg transparant flex items-center justify-start w-40 px-2 ${info.type == "start" && "bg-green-200 cursor-pointer"} ${
          info.type == "end" && "bg-red-200 cursor-pointer"
        }`}
        key={hour}>
        <div className="overflow-hidden tracking-wide whitespace-nowrap w-max text-ellipsis font-spartan">{info.title ? info.title : ""}</div>
      </div>
    );
  }
  return scheduleSlots;
}
