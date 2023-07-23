import { BsFilter } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const ContainerNav = () => {
  return (
    <div className="h-max bg-white border border-gray-100 w-full py-3 px-6 flex items-center font-montserrat justify-between">
      <div className="flex bg-gray-200 rounded-lg w-max h-8 ">
        <input
          type="text"
          placeholder="Search for a project"
          className=" text-cstColor-500 bg-transparent border-0 w-72 text-base
            placeholder-cstColor-500  focus:ring-0 focus:outline-none
            "
        />
        <button className="bg-cstColor-100 rounded-md text-white px-3 cursor-pointer hover:scale-105 ">
          Search
        </button>
      </div>

      <div className="flex text-sm text-white">
        <button className="flex items-center h-9 px-3 mr-2 bg-cstColor-100 rounded-md cursor-pointer hover:scale-105">
          <BsFilter className="mr-2 scale-125" />
          <span>Filter & Sort</span>
        </button>

        <button className="flex items-center h-9 px-3 bg-cstColor-100 rounded-md cursor-pointer hover:scale-105 ">
          <AiOutlinePlus className="mr-2 scale-125" />
          <span>New Task</span>
        </button>
      </div>
    </div>
  );
};
export default ContainerNav;
