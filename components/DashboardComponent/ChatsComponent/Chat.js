import ChatHeader from "./ChatsHelper/ChatHeader";
import Message from "./ChatsFormat/Message";
import ImageMessage from "./ChatsFormat/ImageMessage";
import AutoSizeTextArea from "./ChatsHelper/AutoSizeTextArea";
import { useRef, useEffect, useContext, useCallback } from "react";
import StoreContext from "@/store/mystore";
import { formatDateToChatFormat } from "./ChatsHelper/FormattedDateToChatFromat";

const Chat = (props) => {
  const chatContainerRef = useRef(null);
  const chats = props.curChatData;
  const ctx = useContext(StoreContext);
  const curUser = ctx.userData;
  let prevname = "";

  const sendMessage = useCallback(
    (messageData) => {
      const rand = Math.floor(Math.random() * 1000);
      messageData.id = `chat-${rand}`;
      messageData.name = curUser.name;
      messageData.userId = curUser.userId;
      //get the scroll height
      ctx.updateChats("push-to-chat", chats.projectId, messageData);
    },
    [ctx, curUser, chats]
  );

  useEffect(() => {
    if (chatContainerRef.current) {
      if (chats?.newMessage > 0) {
        //
      } else {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }
  }, [sendMessage, chats?.newMessage]);

  return (
    <section className="bg-white font-montserrat relative">
      <ChatHeader title={chats?.title} />

      <main className="bg-cstColor-300 h-chat p-4 overflow-y-scroll custom-scrollbar slide-in" ref={chatContainerRef}>
        {chats?.chats?.map((data) => {
          const prevChatName = prevname == data.name;
          prevname = data.name;
          const userMessage = data.userId == curUser.userId;
          const dateFormat = formatDateToChatFormat(data.time);
          const formattedDate = `${dateFormat.month} ${dateFormat.day} - ${dateFormat.hours}:${dateFormat.minutes}`;

          if (data.type == "message") {
            return <Message key={data.id} name={data.name} message={data.message} time={formattedDate} userMessage={userMessage} prevChatName={prevChatName} />;
          }
          if (data.type == "image") {
            return <ImageMessage key={data.id} name={data.name} image={data.image} time={formattedDate} userMessage={userMessage} prevChatName={prevChatName} />;
          }
        })}
      </main>

      <AutoSizeTextArea sendMessage={sendMessage} />
    </section>
  );
};
export default Chat;

// next steps

//scroll height---
//if user sends a message? the scroll height should be current scrollheight...however if a user recieves message, the scroll height should equal to the previous scrollheight(for every message, you will save the scroll height)--the moment the user leaves the chat page --the scroll height should be saveda as well)
//implement search chat functionality.
