import { AiOutlineSearch } from "react-icons/ai";
import ChatDesc from "./ChatsHelper/singleListChat";
import { useContext, useState, useEffect } from "react";
import StoreContext from "@/store/mystore";

const ChatList = (props) => {
  const ctx = useContext(StoreContext);
  const chatsArr = ctx.chats;
  const [curChat, setCurChat] = useState(chatsArr[0]);

  useEffect(() => {
    props.onClick(curChat);
  }, [props, curChat]);

  return (
    <section className=" h-screen border-r-2 border-gray-50 font-montserrat bg-white pt-6 pb-2">
      <header className="bg-gray-100 h-12 slide-in flex items-center mx-6 rounded-2xl">
        <AiOutlineSearch className="ml-4 text-xl fill-cstColor-100 scale-150" />
        <input type="text" class=" border-0 focus:outline-none focus:ring-0 w-full bg-transparent h-12  " placeholder="Search" />
      </header>

      <main className="mt-5 h-chatList flex flex-col overflow-y-scroll scrollbar-cst px-4">
        {chatsArr?.map((chatData) => {
          const memeberslength = ctx.userData?.projectsInfo?.find((project) => project.projectId == chatData.projectId)?.groupMembers?.length;
          return (
            <ChatDesc
              key={chatData.projectId}
              title={chatData.title}
              newSms={chatData.newMessage > 0 && chatData.newMessage}
              membersLength={memeberslength}
              active={chatData == curChat}
              image={chatData.profile}
              onClick={() => {
                setCurChat(chatData);
              }}
            />
          );
        })}
      </main>
    </section>
  );
};
export default ChatList;
