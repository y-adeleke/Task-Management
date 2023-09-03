import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import StoreContext from "@/store/mystore";
import { ProjectLengthsFilter } from "../Dashboard-Helper/CardComponentHelpFunction";

const ProfileDisplayer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const ctx = useContext(StoreContext);

  let totalProjects = ctx.userData.projectsInfo.length;
  let completed = ProjectLengthsFilter("completed", ctx.userData.projectsInfo);
  let todo = ProjectLengthsFilter("to-do", ctx.userData.projectsInfo);
  let inProgress = ProjectLengthsFilter("in-progress", ctx.userData.projectsInfo);
  let overdue = ProjectLengthsFilter("overdue", ctx.userData.projectsInfo);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = currentTime.getHours();
  const formattedhour = hour > 12 ? hour - 12 : hour;
  const minute = currentTime.getMinutes();
  const options = { month: "short", day: "numeric" };
  const date = currentTime.toLocaleDateString("en-US", options);

  return (
    <main className="bg-white p-4 h-screen flex flex-col font-montserrat shadow-md ">
      <div className="py-3  border-b border-gray-200 slide-in">
        <div className="flex items-center px-4">
          <div className="mr-4">
            <p className="">Hello,</p>
            <p className="text-xl uppercase font-poppins font-extrabold tracking-wide text-cstColor-500">{ctx.userData.name.split(" ")[0]}</p>
            <span className="text-sm font-spartan">ID: {ctx.userData.userId}</span>
          </div>
          <div className=" rounded-full w-max">
            <Image src={ctx.userData.profilePicture} width={40} height={40} className="rounded-full" alt="user-profile" />
          </div>
        </div>
        <p className="mt-2 px-2 text-xs text-gray-500 w-full">{ctx.userData.bio} </p>
      </div>

      <div className="py-2 border-b border-gray-200 flex flex-col slide-in">
        <span className="px-4 py-1 text-cstColor-100">
          <p className="py-2 text-sm uppercase w-max">Total projects:</p>
          <p className="px-2 border-l-2 border-cstColor-100  text-2xl font-poppins font-bold tracking-wide ">{totalProjects}</p>
        </span>
        <span className="px-4 py-1">
          <p className="py-2 text-sm text-gray-500 uppercase w-max">Completed:</p>
          <p className="px-2 border-l-2 border-green-500 text-2xl font-poppins font-bold tracking-wide ">{completed}</p>
        </span>

        <span className="px-4 py-1">
          <p className="py-2 text-sm text-gray-500 uppercase w-max">In Progress:</p>
          <p className="px-2 border-l-2 border-yellow-500 text-2xl font-poppins font-bold tracking-wide ">{inProgress}</p>
        </span>
        <span className="px-4 py-1">
          <p className="py-2 text-sm text-gray-500 uppercase w-max">out of schedule:</p>
          <p className="px-2 border-l-2 border-red-600 text-2xl font-poppins font-bold tracking-wide ">{overdue}</p>
        </span>
        <span className="px-4 py-1">
          <p className="py-2 text-sm text-gray-500 uppercase w-max">to-do:</p>
          <p className="px-2 border-l-2 border-sky-600 text-2xl font-poppins font-bold tracking-wide ">{todo}</p>
        </span>
      </div>

      <div className="py-2 px-6 flex flex-col h-max m-auto text-white bg-cstColor-100 rounded-xl shadow-md w-4/5 slide-in">
        <p className="pb-2 text-gray-300">current:</p>
        <div className="py-2">
          <div className="text-lg uppercase text-gray-100">{date}</div>
          <div className="py-1 text-3xl font-righteous">
            {formattedhour > 9 ? formattedhour : "0" + formattedhour}:{minute > 9 ? minute : "0" + minute} <div className="text-base text-sky-200 uppercase">{hour > 12 ? "pm" : "am"}</div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProfileDisplayer;
