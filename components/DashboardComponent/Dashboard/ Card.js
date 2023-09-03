import { AiOutlineMore } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import Image from "next/image";
import { statusChecker } from "@/components/DashboardComponent/Dashboard-Helper/CardComponentHelpFunction";
import { projectDateStatusChecker } from "@/components/DashboardComponent/Dashboard-Helper/CardComponentHelpFunction";
import PopupNav from "@/General-Helper/PopupNav";
import { dateConverter } from "@/components/DashboardComponent/Dashboard-Helper/CardComponentHelpFunction";

const Card = (props) => {
  const { title, description, startDate, endDate, taskLength, taskcompleted, groupMembers } = props.data;

  const startDateFormatted = dateConverter(startDate);
  const endDateFormatted = dateConverter(endDate);
  let { currentDateStatus, status } = projectDateStatusChecker(startDateFormatted, endDateFormatted);
  status = statusChecker(+taskLength, +taskcompleted, status);

  return (
    <div className={`p-4 py-6 bg-white rounded-2xl shadow-md slide-in relative flex flex-col justify-between ${props.editIconClicked ? "z-20" : "z-0"}`}>
      <div className="flex justify-between">
        <button
          className={`p-1 rounded-md text-xs capitalize ${status == "completed" && "bg-green-100 text-green-800"} ${status == "to-do" && "bg-sky-100 text-sky-800"} ${
            status == "in-progress" && "bg-yellow-100 text-Yellow-800"
          } ${status == "overdue" && "bg-red-100 text-red-800"} `}>
          {status}
          <span className="font-semibold italic"> ({currentDateStatus})</span>
        </button>

        <div className="p-2 rounded-full bg-gray-100 " onClick={props.optionOnClicked}>
          <AiOutlineMore className="cursor-pointer" />
        </div>

        {props.editIconClicked && (
          <div className={`absolute -right-1/2 top-10 overflow-visible`}>
            <PopupNav options={[{ option: "open project" }, { option: "Add a team memeber" }, { option: "Remove a team member" }, { option: "delete project" }]} />
          </div>
        )}
      </div>

      <div className="py-3 pb-8">
        <h1 className="capitalize font-righteous">{title}</h1>
        <p className="pt-1 text-sm w-4/5">{description}</p>
      </div>

      <div className="mt-auto   flex justify-between items-center border-t border-gray-200">
        <div className="flex w-4/5 overflow-x-scroll custom-scrollbar">
          {groupMembers.map((member, index) => (
            <Image src={member.profilePicture} key={member.name} height={50} width={50} alt="profile image" className={`rounded-full scale-50 ${index != 0 && "-ml-8"} `} />
          ))}
        </div>

        <div className="flex items-center w-max text-cstColor-100">
          <AiOutlineStar className=" text-xl cursor-pointer hover:scale-110 " />
          <span className="flex items-center ml-1 cursor-pointer hover:scale-110">
            <BiTask className="text-xl" />
            <span className="text-xs  ">
              <span className={`${+taskLength > +taskcompleted ? "text-cstColor-200" : "text-green-600"}`}>{+taskcompleted}</span>/{+taskLength}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Card;
