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

      ctx.updateChats("push-to-chat", chats.projectId, messageData);
    },
    [ctx, curUser, chats]
  );

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [sendMessage]);

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
//change taskoutine to userdata --done✅
//change profile --done✅
//test functionality by populating data --done✅
//make sure the last text is shown -- done✅
//when user hits send button...push the data to the specific group chat array and re-load chats -- done✅
//implement image send. -- done✅
//implement search chat functionality.
