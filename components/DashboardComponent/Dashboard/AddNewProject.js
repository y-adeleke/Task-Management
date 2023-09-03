import { AiOutlinePlus } from "react-icons/ai";
import { ClickDocument } from "@/General-Helper/ClickDocument";

const AddNewProject = () => {
  const AddNewProjectHandler = (e) => {
    e.stopPropagation();
    ClickDocument();
  };

  return (
    <div className="p-4 pb-1 h-20 bg-cstColor-300 flex flex-col slide-in absolute items-center justify-center cursor-pointer text-cstColor-100 left-0 bottom-0 w-full" onClick={AddNewProjectHandler}>
      <AiOutlinePlus className="text-3xl" />
      <p className="text-lg py-2">New Project</p>
    </div>
  );
};
export default AddNewProject;
