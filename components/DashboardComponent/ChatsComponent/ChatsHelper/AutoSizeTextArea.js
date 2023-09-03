import { useEffect, useRef, useState } from "react";
import { BsSendPlus } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { currentTimeGenerator } from "./currentTimeGenerator";

const AutoSizeTextArea = (props) => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.current.style.height = "40px";
      const scrollHeight = textAreaRef.current.scrollHeight; //get the scroll-height
      // Set the height
      if (scrollHeight > 200) {
        textAreaRef.current.style.height = "200px"; //maximum height
      } else textAreaRef.current.style.height = scrollHeight + "px";
      // Use setTimeout to schedule the scrollTop adjustment after a brief delay
      setTimeout(() => {
        textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
      }, 0);
    }
  }, [value]);

  const textChangeHandler = (e) => setValue(e.target?.value);

  const sendMessageHandler = () => {
    if (value.trim().length > 0) {
      const formattedDate = currentTimeGenerator();
      const messageObj = {
        type: "message",
        message: value,
        time: formattedDate,
        image: "",
      };
      props.sendMessage(messageObj);
    }
    setValue("");
  };
  const sendMessageEnterKeyHandler = (e) => {
    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessageHandler();
    }
  };

  const sendImageHandler = (e) => {
    const files = Object.values(e.target.files);
    files?.forEach((file) => {
      const sentImages = []; // Array to store sent image URLs
      if (file.type.startsWith("image/") && !sentImages.includes(file.name)) {
        const imageUrl = URL.createObjectURL(file);
        sentImages.push(file.name);

        const formattedDate = currentTimeGenerator();
        const messageObj = {
          type: "image",
          message: "",
          time: formattedDate,
          image: imageUrl,
        };
        props.sendMessage(messageObj);

        // Reset the input element to allow selecting the same file again
        e.target.value = null;
      }
    });
  };

  return (
    <div className="bg-cstColor-100 text-white slide-in flex items-center w-full p-2 absolute bottom-0 left-0 h-auto rounded-md">
      <textarea
        name=""
        id=""
        rows="1"
        class="text-area border-0 focus:outline-none focus:ring-0 w-full bg-transparent"
        placeholder="Your message..."
        onChange={textChangeHandler}
        onKeyDown={sendMessageEnterKeyHandler}
        ref={textAreaRef}
        value={value}></textarea>

      {!(value.length > 0) && (
        <label className="relative">
          <BiImageAdd className="text-xl scale-150 cursor-pointer hover:scale-150 bottom-0 left-0" />
          <input type="file" multiple accept="image/*" name="imageMessage" className="bottom-0 left-0" onChange={sendImageHandler} />
        </label>
      )}

      <div onClick={sendMessageHandler} className="ml-2 p-2 bg-white rounded-md hover:scale-105 cursor-pointer self-end">
        <BsSendPlus className="text-xl  text-cstColor-100 scale-125" />
      </div>
    </div>
  );
};
export default AutoSizeTextArea;
