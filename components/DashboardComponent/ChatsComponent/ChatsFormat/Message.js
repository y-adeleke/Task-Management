const Message = (props) => {
  let profileNameImage = props.name.split(" ").map((name) => name[0]);

  return (
    <div className={`w-full flex flex-col ${props.userMessage ? "items-end" : "items-start mt-3"}`}>
      {!props.userMessage && !props.prevChatName && (
        <div className="flex items-end font-spartan">
          <div className="p-1 bg-sky-900 rounded-md text-xs mr-1">
            <div className=" text-white">{profileNameImage}</div>
          </div>
          <span className="text-sm mr-3">{props.name}</span>
        </div>
      )}
      <div
        className={`${props.userMessage ? "bg-cstColor-100 text-white" : "bg-gray-200 text-black"}
       p-2 font-spartan w-max max-w-[60%] rounded-lg mt-1 h-max whitespace-pre-line`}>
        {props.message}
        <p className={`text-xs text-end ${props.userMessage ? "text-gray-300" : "text-gray-500"}`}>{props.time}</p>
      </div>
    </div>
  );
};
export default Message;
