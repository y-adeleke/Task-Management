import { AiOutlineCheck } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";
import { AiOutlineWarning } from "react-icons/ai";

//This component creates an alert e.g succesful or failed.
const AlertNotification = (props) => {
  return (
    <div className={`w-2/3 p-4 pl-2  border-l-4 ${props.status == "success" && "bg-green-100 border-green-500"} ${props.status == "warning" && "bg-amber-100 border-amber-500"} ${props.status == "error" && "bg-red-100 border-red-500"} ${props.className ? props.className : ""}`}>
      <div className="flex items-center">
        <div className={`p-2 ${props.status == "success" && "bg-green-500"} ${props.status == "warning" && "bg-amber-500"} ${props.status == "error" && "bg-red-500"} mr-2 rounded-xl`}>
          {props.status == "success" && <AiOutlineCheck className="fill-white scale-150" />}
          {props.status == "warning" && <AiOutlineWarning className="fill-white scale-150" />}
          {props.status == "error" && <BiErrorAlt className="fill-white scale-150" />}
        </div>
        <span className="text-cstDarkColor-100">{props.children}</span>
      </div>
    </div>
  );
};
export default AlertNotification;
