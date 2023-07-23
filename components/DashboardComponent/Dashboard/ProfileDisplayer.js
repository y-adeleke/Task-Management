import Image from "next/image";
import profile from "../../../public/pictures&svgs/usersprofile/profile10.jpeg";
import { useState, useEffect } from "react";

const ProfileDisplayer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const options = { month: "short", day: "numeric" };
  const date = currentTime.toLocaleDateString("en-US", options);

  return (
    <main className="bg-white p-4 h-screen w-max flex flex-col font-montserrat shadow-md">
      <div className="py-10 flex items-center px-4 border-b border-gray-200">
        <div className="mr-4">
          <p className="">Hello,</p>
          <p className="text-xl uppercase font-poppins font-extrabold tracking-wide text-cstColor-500">
            Adeleke
          </p>
        </div>
        <div className=" rounded-full w-max">
          <Image
            src={profile}
            width={40}
            height={40}
            className="rounded-full"
            alt="user-profile"
          />
        </div>
      </div>

      <div className="py-10 border-b border-gray-200 flex flex-col">
        <span className="px-4 py-3 text-cstColor-100">
          <p className="py-2 text-sm uppercase w-max">Total projects:</p>
          <p className="px-2 border-l-2 border-cstColor-100  text-2xl font-poppins font-bold tracking-wide ">
            197
          </p>
        </span>
        <span className="px-4 py-3">
          <p className="py-2 text-sm text-gray-500 uppercase w-max">
            Completed:
          </p>
          <p className="px-2 border-l-2 border-green-500 text-2xl font-poppins font-bold tracking-wide ">
            107
          </p>
        </span>

        <span className="px-4 py-3">
          <p className="py-2 text-sm text-gray-500 uppercase w-max">
            In Progress:
          </p>
          <p className="px-2 border-l-2 border-yellow-500 text-2xl font-poppins font-bold tracking-wide ">
            75
          </p>
        </span>
        <span className="px-4 py-3">
          <p className="py-2 text-sm text-gray-500 uppercase w-max">
            out of schedule:
          </p>
          <p className="px-2 border-l-2 border-red-600 text-2xl font-poppins font-bold tracking-wide ">
            10
          </p>
        </span>
      </div>

      <div className="py-2 px-6 flex flex-col h-max m-auto text-white bg-cstColor-100 rounded-xl shadow-md w-4/5">
        <p className="pb-2 text-gray-300">current:</p>
        <div className="py-2">
          <div className="text-lg uppercase text-gray-100">{date}</div>
          <div className="py-1 text-3xl font-righteous">
            {hour > 12 ? hour - 12 : hour}:{minute > 9 ? minute : "0" + minute}{" "}
            <div className="text-base text-sky-200 uppercase">
              {hour > 12 ? "pm" : "am"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProfileDisplayer;
