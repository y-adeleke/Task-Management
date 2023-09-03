import { AiTwotoneCalendar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import PopupList from "./ChatsHelper/PopupList";
import ChatBackgroundChanger from "./ChatsHelper/ChatBackgroundChanger";
import { useState, useContext } from "react";
import ChatGroupMembers from "./ChatsHelper/ChatGroupMembers";
import StoreContext from "@/store/mystore";
import { projectDateStatusChecker } from "../Dashboard-Helper/CardComponentHelpFunction";
import { statusChecker } from "../Dashboard-Helper/CardComponentHelpFunction";
import { formatDateToChatFormat } from "./ChatsHelper/FormattedDateToChatFromat";
import { dateConverter } from "../Dashboard-Helper/CardComponentHelpFunction";

const ChatProfile = (props) => {
  const [active, setActive] = useState("tasks");

  const ctx = useContext(StoreContext);
  const userData_projects = ctx.userData?.projectsInfo;
  const curChatData = props.curChatData;
  const curProjectData = userData_projects.find((project) => project.projectId === curChatData?.projectId);

  const startDate = formatDateToChatFormat(curProjectData?.startDate);
  const endDate = formatDateToChatFormat(curProjectData?.endDate);

  let { status } = projectDateStatusChecker(dateConverter(curProjectData?.startDate), dateConverter(curProjectData?.endDate));
  status = statusChecker(curProjectData?.taskLength, curProjectData?.taskcompleted, status);
  const desc = curProjectData?.description;

  let statusColor = "";
  switch (status.toLowerCase()) {
    case "in-progress":
      statusColor = "yellow";
      break;
    case "completed":
      statusColor = "green";
      break;
    case "overdue":
      statusColor = "red";
      break;
    default:
      statusColor = "sky";
  }

  const taskHandler = () => setActive("tasks");
  const chatbackgroundHandler = () => setActive("chat-background");
  const teamMemebersHandler = () => setActive("team-members");

  return (
    <main className="bg-white p-4 h-screen font-montserrat shadow-md text-gray-100">
      <div className="text-xs bg-cstColor-100 p-2 py-5 rounded-xl px-4">
        <div className="flex justify-between items-center capitalize">
          <div className="flex items-center text-gray-300">
            <AiTwotoneCalendar />
            <span className="ml-2">timeline:</span>
          </div>
          <span>{`${startDate.month} ${startDate.day} - ${endDate.month} ${endDate.day}`}</span>
        </div>
        <div className="mt-4 flex justify-between items-center capitalize">
          <div className="flex items-center text-gray-300">
            <AiOutlineStar />
            <span className="ml-2">status:</span>
          </div>
          <div className="flex items-center">
            <div className={`h-2 w-2 bg-${statusColor}-200 mr-1`}></div>
            <span>{status}</span>
          </div>
        </div>
        <p className="mt-6 text-gray-200">{desc}</p>
      </div>

      <div className="mt-10 text-gray-900">
        <div className="px-2 flex justify-between items-center py-3 cursor-pointer mb-1 border-b border-b-gray-50" onClick={chatbackgroundHandler}>
          <p>Chat Background</p>
          <BsFillCaretDownFill />
        </div>
        {active == "chat-background" && <ChatBackgroundChanger curProjectData={curProjectData} />}

        <div className="px-2 flex justify-between items-center py-3 cursor-pointer mb-1 border-b border-b-gray-50" onClick={teamMemebersHandler}>
          <p>Team Memebers</p>
          <BsFillCaretDownFill />
        </div>
        {active == "team-members" && (
          <div className="py-5 h-max max-h-80 overflow-y-scroll scrollbar-cst space-y-4">
            {curProjectData?.groupMembers.map((member) => (
              <ChatGroupMembers key={member.name} name={member.name} profile={member.profilePicture} />
            ))}
          </div>
        )}
        <div className="px-2 flex justify-between items-center py-3 cursor-pointer mb-1 border-b border-b-gray-50" onClick={taskHandler}>
          <p>Tasks</p>
          <BsFillCaretDownFill />
        </div>
        {active == "tasks" && (
          <div className="py-5 h-80 overflow-y-scroll scrollbar-cst space-y-4">
            {curProjectData?.taskOutline?.map((task) => (
              <PopupList key={task.taskname} task={task.taskname} completed={task.status.toLowerCase() == "completed".toLowerCase()} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
export default ChatProfile;
