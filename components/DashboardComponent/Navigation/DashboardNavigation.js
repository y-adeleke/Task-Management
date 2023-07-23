import Link from "next/link";
import { AiOutlineMore } from "react-icons/ai";
import { FcParallelTasks } from "react-icons/fc";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import profile from "../../../public/pictures&svgs/usersprofile/profile10.jpeg";
import Image from "next/image";
import { useState, useEffect } from "react";
import PopupNav from "@/General-Helper/PopupNav";
import { ClickDocument } from "@/General-Helper/ClickDocument";
import { iconAndNames } from "./NavHelper";

const DashboardNavigation = () => {
  const [openNavName, setOpenNavName] = useState(false);
  const [active, setActive] = useState(0);
  const [popupActive, setPopupActive] = useState(false);
  const { iconList, iconNameList } = iconAndNames;

  useEffect(() => {
    const handleDocumentClick = () => {
      setPopupActive(null);
    };
    document.addEventListener("click", handleDocumentClick);
  }, []);

  return (
    <main
      className={`${
        openNavName ? "w-72" : "w-20"
      } transition-all duration-300 ease-in-out py-6 bg-cstColor-100 text-white h-screen relative flex flex-col justify-between`}
    >
      <div>
        <Link
          href="/"
          className="flex items-center text-2xl cursor-pointer px-4"
        >
          <FcParallelTasks className="text-3xl" />
          {openNavName && (
            <span className=" font-bold text-xl font-playfair italic ">
              Task<span className="text-cstColor-200">Tribe</span>
            </span>
          )}
        </Link>
        <div className="mt-4 flex flex-col font-montserrat slide-in w-max">
          {iconList.map((NavIcon, index) => (
            <div
              key={index}
              className={`px-4 py-2 mt-4 flex items-center cursor-pointer ${
                index == active && "border-l-2"
              } hover:border-l-2 border-white`}
              onClick={() => {
                setActive(index);
              }}
            >
              <div
                className={`p-2 rounded-md ${
                  index == active && "bg-cstColor-200 "
                }`}
              >
                <NavIcon className="scale-110" />
              </div>

              {openNavName && (
                <span className="ml-3 text-sm slide-in">
                  {iconNameList[index]}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="py-3 flex items-center px-4 border-t relative border-cstColor-100 w-max"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Image
          src={profile}
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          alt="user profile"
          onClick={() => {
            ClickDocument();
            setPopupActive(true);
          }}
        />

        {openNavName && (
          <div className="pl-2 flex">
            <div className="text-sm">
              <h1 className="text-sm capitalize font-bold pb-1">
                Yusuf O. Adeleke
              </h1>
              <p className="text-xs ">adelekeyusuf@gmail.com</p>
            </div>
            <AiOutlineMore
              className="scale-125 cursor-pointer"
              onClick={() => {
                ClickDocument();
                setPopupActive(true);
              }}
            />
          </div>
        )}

        {popupActive && (
          <div
            className={`absolute ${
              openNavName && "-right-1/2"
            } bottom-10 z-50 overflow-visible`}
          >
            <PopupNav
              options={[{ option: "edit profile" }, { option: "sign out" }]}
            />
          </div>
        )}
      </div>

      <div className="absolute top-16 right-0 -mr-7 p-2 rounded-lg bg-cstColor-400 shadow-xl cursor-pointer   hover:scale-105">
        {!openNavName && (
          <AiOutlineRight
            className="text-2xl text-white"
            onClick={() => {
              setOpenNavName(!openNavName);
            }}
          />
        )}
        {openNavName && (
          <AiOutlineLeft
            className="text-2xl  text-white"
            onClick={() => {
              setOpenNavName(!openNavName);
            }}
          />
        )}
      </div>
    </main>
  );
};
export default DashboardNavigation;
