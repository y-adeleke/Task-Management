import Image from "next/image";

const ImageMessage = (props) => {
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
      <div className="relative w-[50%]">
        <Image src={props.image} alt="Avatar 1" height={100} width={100} class="object-cover w-full h-52 mt-3 relative" />
        <p className="absolute bottom-1 right-2 w-full small-text text-end text-gray-100">{props.time}</p>
      </div>
    </div>
  );
};
export default ImageMessage;
