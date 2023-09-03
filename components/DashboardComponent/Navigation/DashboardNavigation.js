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
import { navItems } from "./NavHelper";
import { useRouter } from "next/router";

const DashboardNavigation = (props) => {
  const [openNavName, setOpenNavName] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    const handleDocumentClick = () => {
      setPopupActive(null);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const navClickHandler = (navItem) => {
    if (navItem.name == "Dark Mode") return;
    if (navItem.name == "Notification") {
      props.showNotif(true);
      return;
    }
    props.showNotif(false);
    router.push(navItem.href);
  };

  return (
    <main className="flex overflow-hidden w-screen bg-cstColor-100">
      <section className={`w-24  transition-all duration-300 ease-in-out py-6 pb-1 bg-cstColor-100 text-white h-screen relative flex flex-col items-center justify-between`}>
        <div>
          <Link href="/" className="flex justify-center text-3xl font-righteous text-gray-200 cursor-pointer px-4">
            <span className="mr-1">T</span> <span>T</span>
          </Link>

          <div className="mt-4 flex flex-col items-center font-montserrat  w-max">
            {navItems.map((navItem, index) => (
              <div key={index} className={`px-3 py-2 mt-3 flex flex-col items-center cursor-pointer  `} onClick={() => navClickHandler(navItem)}>
                <div
                  className={`p-2 rounded-md ${navItem.name == "Notification" && "flex text-lg"}  
                 ${navItem.href == asPath ? "text-cstColor-200 bg-white" : "hover:text-white text-gray-400"}`}>
                  <navItem.icon className={`scale-110 `} />
                  {navItem.name == "Notification" && <span className="relative  rounded-full h-2 w-2 bg-sky-300"></span>}
                </div>

                <span className="small-text slide-in text-gray-300">{navItem.name}</span>
              </div>
            ))}
            {/*end of nav item */}
          </div>
        </div>

        <div
          className="py-3 flex items-center px-4 relative  w-max"
          onClick={(e) => {
            e.stopPropagation();
          }}>
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

          {popupActive && (
            <div className={`absolute ${openNavName && "-right-1/2"} bottom-10 z-50 overflow-visible`}>
              <PopupNav options={[{ option: "edit profile" }, { option: "sign out" }]} />
            </div>
          )}
        </div>
      </section>

      <section className="h-screen">{props.children}</section>
    </main>
  );
};
export default DashboardNavigation;
