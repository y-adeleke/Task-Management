import ContainerNav from "./ContainerNav";
import Card from "./ Card";
import { datas } from "@/components/DashboardComponent/Dashboard-Helper/Datas";
import { useState, useEffect } from "react";
import { ClickDocument } from "@/General-Helper/ClickDocument";

const DashboardContainer = () => {
  const [editClickedIndex, setEditClickedIndex] = useState(null);

  useEffect(() => {
    const handleDocumentClick = () => {
      setEditClickedIndex(null);
    };
    document.addEventListener("click", handleDocumentClick);
  }, []);

  return (
    <main className="h-max bg-gray-100 w-full">
      <ContainerNav />
      <div className="p-10 px-14 grid grid-cols-3 grid-rows-3 gap-8">
        {datas.map((data, index) => (
          <Card
            key={data.title}
            data={data}
            optionOnClicked={(e) => {
              e.stopPropagation();
              ClickDocument();
              setEditClickedIndex(index);
            }}
            editIconClicked={editClickedIndex == index}
          />
        ))}
      </div>
    </main>
  );
};
export default DashboardContainer;
