import { createContext } from "react";
import { useState } from "react";
import { userInitialData } from "./userdata";
import { projectsData } from "./projectsData";
import { chatsData } from "./chatsData";

const StoreContext = createContext({
  userData: {},
  projects: {},
  chats: [],
  updateChats: (type, projectId, newData) => {},
});
export default StoreContext;

export const StoreContextProvider = (props) => {
  const [userData, setUserData] = useState(userInitialData);
  const [projectsDatas, setProjectsDatas] = useState(projectsData);
  const [chatDatas, setChatsData] = useState(Object.values(chatsData));

  const updateChatData = (type, projectId, newData) => {
    if (type == "title") {
    }
    if (type == "chat-profile") {
      setChatsData((prevData) => {
        let prevChatArr = [...prevData];
        let correspondingProject = prevChatArr?.find((chat) => chat.projectId == projectId);
        correspondingProject.profile = newData;
        //Also, update the profile in the database.
        return prevChatArr;
      });
    }
    if (type == "newMessageLength") {
    }
    if (type == "push-to-chat") {
      setChatsData((prevData) => {
        let prevChatArr = [...prevData];
        let correspondingProject = prevChatArr?.find((chat) => chat.projectId == projectId);
        ////this only applies to Image messages
        if (correspondingProject.chats.length > 0 && newData.type == "image") {
          const chatIdsSet = new Set(correspondingProject.chats.map((chat) => chat.id)); //get all the chat-id's
          console.log(chatIdsSet);
          //check if the new message id already exist
          if (chatIdsSet.has(newData.id)) {
            return prevChatArr; // If the IDs match, don't add the message again
          }
        }
        /////logic for Image messages ends here

        correspondingProject.chats.push(newData);
        //Also, update the chat in the database.
        return prevChatArr;
      });
    }
  };
  const storeValues = {
    userData: userData,
    projects: projectsDatas,
    chats: chatDatas,
    updateChats: updateChatData,
  };
  return <StoreContext.Provider value={storeValues}>{props.children}</StoreContext.Provider>;
};
