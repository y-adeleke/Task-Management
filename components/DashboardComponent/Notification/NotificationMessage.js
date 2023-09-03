import Image from "next/image";
import { NotificationMessageGenerator } from "./NotificationHelper";
import NotificationAcceptOrRejectBtn from "./NotificationAcceptORRejectBtn";

const NotificationMessage = (props) => {
  const { type, projectname, time, date, username, profile } = props.notificationData;

  let { message, header } = NotificationMessageGenerator(type, projectname, username);

  return (
    <div className={`p-6 flex border-b border-gray-500 border-l-4 ${props.className}`}>
      <div className="">
        <Image src={profile ? profile : ""} alt="user-profile" height={40} width={40} className="rounded-full w-full" />
      </div>

      <div className="flex flex-col ml-8 w-full  ">
        {header}
        <span className="text-xs text-gray-400">
          {time} - {date}{" "}
        </span>
        <div className={`mt-4 p-4 bg-cstColor-600 border-l-4 ${type == "project-completion" || type == "project-creation" ? "border-green-400 text-green-100" : "border-sky-300 "}`}>
          <p>{message}</p>
        </div>
        {type === "project-join-request" || type === "project-invitation" ? <NotificationAcceptOrRejectBtn /> : ""}
      </div>
    </div>
  );
};
export default NotificationMessage;
