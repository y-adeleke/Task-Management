import Profile1 from "../../../../public/pictures&svgs/chats-svgs/mobile-testing-and-group-discussion.png";
import Profile2 from "../../../../public/pictures&svgs/chats-svgs/concept-of-seo-ranking.png";
import Profile3 from "../../../../public/pictures&svgs/chats-svgs/developer-team.png";
import Profile4 from "../../../../public/pictures&svgs/chats-svgs/teamwork.png";
import Profile5 from "../../../../public/pictures&svgs/chats-svgs/team-building-importance-in-business-success.png";
import Profile6 from "../../../../public/pictures&svgs/chats-svgs/people-protesting.png";
import Profile7 from "../../../../public/pictures&svgs/chats-svgs/male-and-female-employee-chatting-on-phone.png";
import Profile8 from "../../../../public/pictures&svgs/chats-svgs/concept-of-remote-team.png";
import Image from "next/image";
import { useContext } from "react";
import StoreContext from "@/store/mystore";

const ChatBackgroundChanger = (props) => {
  const ctx = useContext(StoreContext);

  const changeToProfileOneHandler = () => {
    ctx.updateChats("chat-profile", props.curProjectData.projectId, Profile1);
  };
  const changeToProfileTwoHandler = () => {
    ctx.updateChats("chat-profile", props.curProjectData.projectId, Profile2);
  };
  const changeToProfileThreeHandler = () => {
    ctx.updateChats("chat-profile", props.curProjectData.projectId, Profile3);
  };
  const changeToProfileFourHandler = () => {
    ctx.updateChats("chat-profile", props.curProjectData.projectId, Profile4);
  };
  const changeToProfileFiveHandler = () => {
    ctx.updateChats("chat-profile", props.curProjectData.projectId, Profile5);
  };
  const changeToProfileSixHandler = () => {
    ctx.updateChats("chat-profile", props.curProjectData.projectId, Profile6);
  };
  const changeToProfileSevenHandler = () => {
    ctx.updateChats("chat-profile", props.curProjectData.projectId, Profile7);
  };
  const changeToProfileEightHandler = () => {
    ctx.updateChats("chat-profile", props.curProjectData.projectId, Profile8);
  };

  return (
    <div className="py-2 w-[100%] overflow-x-scroll flex scrollbar-cst space-x-2 custom-scrollbar">
      <div className="h-16 w-16 p-1 flex justify-center rounded-full items-center hover:scale-110 cursor-pointer" onClick={changeToProfileFiveHandler}>
        <div className="h-14 w-14 rounded-full">
          <Image src={Profile5} alt="profile picture" width={100} height={100} />
        </div>
      </div>
      <div className="h-16 w-16 p-1 flex justify-center rounded-full items-center hover:scale-110 cursor-pointer" onClick={changeToProfileTwoHandler}>
        <div className="h-14 w-14 rounded-full">
          <Image src={Profile2} alt="profile picture" width={100} height={100} />
        </div>
      </div>
      <div className="h-16 w-16 p-1 flex justify-center rounded-full items-center hover:scale-110 cursor-pointer" onClick={changeToProfileThreeHandler}>
        <div className="h-14 w-14 rounded-full">
          <Image src={Profile3} alt="profile picture" width={100} height={100} />
        </div>
      </div>
      <div className="h-16 w-16 p-1 flex justify-center rounded-full items-center hover:scale-110 cursor-pointer" onClick={changeToProfileFourHandler}>
        <div className="h-14 w-14 rounded-full">
          <Image src={Profile4} alt="profile picture" width={100} height={100} />
        </div>
      </div>
      <div className="h-16 w-16 p-1 flex justify-center rounded-full items-center hover:scale-110 cursor-pointer" onClick={changeToProfileOneHandler}>
        <div className="h-14 w-14 rounded-full">
          <Image src={Profile1} alt="profile picture" width={100} height={100} />
        </div>
      </div>
      <div className="h-16 w-16 p-1 flex justify-center rounded-full items-center hover:scale-110 cursor-pointer" onClick={changeToProfileSixHandler}>
        <div className="h-14 w-14 rounded-full">
          <Image src={Profile6} alt="profile picture" width={100} height={100} />
        </div>
      </div>
      <div className="h-16 w-16 p-1 flex justify-center rounded-full items-center hover:scale-110 cursor-pointer" onClick={changeToProfileSevenHandler}>
        <div className="h-14 w-14 rounded-full">
          <Image src={Profile7} alt="profile picture" width={100} height={100} />
        </div>
      </div>
      <div className="h-16 w-16 p-1 flex justify-center rounded-full items-center hover:scale-110 cursor-pointer" onClick={changeToProfileEightHandler}>
        <div className="h-14 w-14 rounded-full">
          <Image src={Profile8} alt="profile picture" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};
export default ChatBackgroundChanger;
