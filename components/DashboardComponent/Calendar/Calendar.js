import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { generateTimeSlots } from "./Helper";
import { generateSchedule } from "./Helper";
import { useState, useContext } from "react";
import StoreContext from "@/store/mystore";

const Calendar = () => {
  // Initialize the state with an array of 7 date objects.
  const [dates, setDates] = useState(getInitialDates());
  const ctx = useContext(StoreContext);
  const projects = ctx.userData.projectsInfo;

  const currentDate = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function getInitialDates() {
    const currentDate = new Date();
    const initialDates = [];
    // Calculate the previous and next dates from the current date.
    for (let i = -3; i <= 3; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      initialDates.push(date);
    }
    return initialDates;
  }

  function handleRightClick() {
    const [lastItem] = dates.slice(-1); // Using destructuring to get the last date in the array
    currentDate.setDate(lastItem.getDate() + 1);
    setDates((prev) => {
      const prevArr = [...prev];
      prevArr.shift();
      return [...prevArr, currentDate];
    });
  }

  function handleLeftClick() {
    const currentDate = new Date();
    const [firstItem] = dates.slice(0); // Using destructuring to get the last date in the array
    currentDate.setDate(firstItem.getDate() - 1);
    setDates((prev) => {
      const prevArr = [...prev];
      prevArr.pop();
      return [currentDate, ...prevArr];
    });
  }

  return (
    <section className="bg-white after-nav-width h-screen p-2 font-montserrat">
      <div className="flex items-center justify-between p-6 pb-2">
        <h1 className=" font-righteous text-3xl mr-2 scale-110">
          {months[currentDate.getMonth()]} <span className=" font-spartan text-cstColor-200">{currentDate.getFullYear()}</span>
        </h1>
        <div className="flex items-center text-3xl mr-5">
          <AiFillCaretLeft onClick={handleLeftClick} className="scale-125 mx-1 cursor-pointer text-cstColor-100 hover:scale-150" />
          <AiFillCaretRight onClick={handleRightClick} className="scale-125 mx-1 cursor-pointer text-cstColor-200 hover:scale-150" />
        </div>
      </div>

      <main className="flex gap-3 h-[85%] overflow-y-auto custom-scrollbar ">
        <div className="flex flex-col p-3">{generateTimeSlots()}</div>
        {dates.map((date, index) => (
          <div key={index} className="flex flex-col p-3 w-40 ">
            {generateSchedule(date, projects)}
          </div>
        ))}
      </main>
    </section>
  );
};
export default Calendar;
