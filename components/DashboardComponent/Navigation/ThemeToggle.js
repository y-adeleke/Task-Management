import React, { useState } from "react";
import { MdOutlineDarkMode as MoonIcon } from "react-icons/md";
import { BsSun as SunIcon } from "react-icons/bs";

export default function ThemeToggle() {
  const [DarkIsEnabled, setDarkIsEnabled] = useState(false);

  const toggleHandler = () => {
    setDarkIsEnabled((prev) => !prev);
  };

  return (
    <div className="mt-3 flex w-full justify-center px-2">
      <label
        className={`label-con mt-3  border-2 border-white w-full rounded-full cursor-pointer flex text-lg ${DarkIsEnabled ? "justify-end moveRightAnim" : "justify-start moveLeftAnim"} `}
        htmlFor="toggle"
        onClick={toggleHandler}>
        <div className={`p-2 bg-white text-cstColor-200 rounded-full`}>
          {DarkIsEnabled && <SunIcon className="scale-110" />}
          {!DarkIsEnabled && <MoonIcon className="scale-125" />}
        </div>
      </label>
    </div>
  );
}
