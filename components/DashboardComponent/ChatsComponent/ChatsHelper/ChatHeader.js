import { AiOutlineSearch } from "react-icons/ai";
const ChatHeader = (props) => {
  return (
    <div className="flex justify-between h-16 items-center bg-cstColor-100 text-gray-100 p-2 px-4 w-full relative top-0 right-0 ">
      <div>
        <h1 className="text-lg font-righteous">{props.title}</h1>
      </div>
      <div className="bg-gray-100 text-cstColor-100 h-8 slide-in flex items-center mx-6 rounded-xl">
        <AiOutlineSearch className="ml-4 text-xl fill-cstColor-100 scale-150" />
        <input type="text" class=" border-0 focus:outline-none focus:ring-0 w-full bg-transparent h-8  " placeholder="Search" />
      </div>
    </div>
  );
};
export default ChatHeader;
