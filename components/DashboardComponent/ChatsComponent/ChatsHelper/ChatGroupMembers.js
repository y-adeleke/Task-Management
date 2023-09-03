import Image from "next/image";

const ChatGroupMembers = (props) => {
  return (
    <div className="flex p-3 border-b border-b-gray-100 h-14 items-center">
      <Image src={props.profile} alt="user profile" width={100} height={100} className="h-10 w-10 rounded-lg" />
      <p className="text-cstColor-100 ml-3 w-max">{props.name}</p>
    </div>
  );
};
export default ChatGroupMembers;
