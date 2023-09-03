import ContainerNav from "./ContainerNav";
import Card from "./ Card";
import { useState, useEffect, useContext } from "react";
import { ClickDocument } from "@/General-Helper/ClickDocument";
import AddNewProject from "./AddNewProject";
import StoreContext from "@/store/mystore";

const DashboardContainer = () => {
  const [editClickedIndex, setEditClickedIndex] = useState(null);
  const ctx = useContext(StoreContext);

  useEffect(() => {
    const handleDocumentClick = () => {
      setEditClickedIndex(null);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const optionClickedHandler = (event, index) => {
    event.stopPropagation();
    ClickDocument();
    setEditClickedIndex(index);
  };

  return (
    <main className="h-screen bg-gray-100 w-full relative rounded-r-2xl ">
      <ContainerNav />
      <div className="h-dashboard overflow-y-scroll scrollbar-cst">
        <div className="p-10  grid-container gap-4 h-max pb-24">
          {ctx.userData.projectsInfo.map((data, index) => (
            <Card key={index} data={data} optionOnClicked={(e) => optionClickedHandler(e, index)} editIconClicked={editClickedIndex == index} />
          ))}
        </div>
        <AddNewProject />
      </div>
    </main>
  );
};
export default DashboardContainer;
