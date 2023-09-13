import { AiOutlineClockCircle } from "react-icons/ai";
import { dateConverter } from "../Dashboard-Helper/CardComponentHelpFunction";

////create dates
export function generateDates(cstdate) {
  const nextInitialDates = [];
  // Calculate the previous and next dates from the current date.
  for (let i = 0; i < 7; i++) {
    const date = new Date(cstdate);
    date.setDate(date.getDate() + i);
    //console.log(date);
    nextInitialDates.push(date);
  }
  return nextInitialDates;
}

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

function isDateMatchFunc(comparingDate, date) {
  const isDateMatch = comparingDate.getFullYear() === date.getFullYear() && comparingDate.getMonth() === date.getMonth() && comparingDate.getDate() === date.getDate();
  return isDateMatch;
}

///////////////// Schdeule ///////////////////
export function generateSchedule(date, projects) {
  //filter every project that matches the current date
  const correspondingDateProjects = projects?.filter((project) => {
    const convertedStartDate = dateConverter(project.startDate);
    const convertedEndDate = dateConverter(project.endDate);
    const isStartDateMatch = isDateMatchFunc(convertedStartDate, date);
    const isEndDateMatch = isDateMatchFunc(convertedEndDate, date);
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

  //generate schdeule for all hours on the day
  for (let hour = 0; hour <= 23; hour++) {
    let title = "";
    let type = "";

    correspondingDateProjects.forEach((element) => {
      console.log(element.startDate, "before converting");
      const convertedStartDate = dateConverter(element.startDate);
      console.log(convertedStartDate, "after converting");
      const convertedEndDate = dateConverter(element.endDate);
      const isStartDateMatch = isDateMatchFunc(convertedStartDate, date);
      const isEndDateMatch = isDateMatchFunc(convertedEndDate, date);

      if (isStartDateMatch && convertedStartDate.getHours().toString() == hour.toString()) {
        type = "start";
        title = element.title;
      }
      if (isEndDateMatch && convertedStartDate.getHours().toString() == hour.toString()) {
        type = "end";
        title = element.title;
      }
    });
    scheduleSlots.push(
      <div
        className={`min-h-[40px] border-b border-b-gray-200 rounded-lg transparant flex items-center justify-start w-40 px-2 ${type == "start" && "bg-green-200 cursor-pointer"} ${
          type == "end" && "bg-red-200 cursor-pointer"
        }`}
        key={hour}>
        <div className="overflow-hidden tracking-wide whitespace-nowrap w-max text-ellipsis font-spartan">{title ? title : ""}</div>
      </div>
    );
  }
  return scheduleSlots;
}
