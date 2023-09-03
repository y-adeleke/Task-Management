import { BsCheckLg } from "react-icons/bs";

const PopupList = (props) => {
  return (
    <div className={`p-2 py-4 rounded-md bg-gray-200 text-black font-spartan flex items-center`}>
      <div className={`w-5 h-5 rounded-md flex justify-center items-center ${props.completed ? "bg-cstColor-100 text-white" : "border-2 border-cstColor-100 "}`}>
        {props.completed && <BsCheckLg className="" />}
      </div>
      <p className="text-sm w-max ml-3">{props.task}</p>
    </div>
  );
};
export default PopupList;
