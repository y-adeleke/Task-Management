import Chat from "./Chat";
import ChatProfile from "./ChatProfile";
import ChatList from "./ChatsList";
import { useState } from "react";

const ChatsComponent = () => {
  const [curChatData, setCurChatData] = useState();
  return (
    <section className="w-chatContainer">
      <ChatList
        onClick={(chatData) => {
          setCurChatData(chatData);
        }}
      />
      <Chat curChatData={curChatData} />
      <ChatProfile curChatData={curChatData} />
    </section>
  );
};
export default ChatsComponent;
