import Image from "next/image";

const ChatDesc = (props) => {
  return (
    <div onClick={props.onClick} class={`flex py-2 px-4 pb-2 rounded-2xl  hover:bg-gray-100 ${props.active && "bg-gray-100 "} slide-in`}>
      <div class="w-14 h-14 rounded-2xl bg-gray-100 flex justify-center items-center">
        <Image src={props.image} alt="Avatar 1" height={100} width={100} class="object-cover h-14 w-14 " />
      </div>
      <div class="ml-3 flex flex-col w-full overflow-hidden">
        <div className="flex justify-between items-center">
          <h2 class=" text-base capitalize tracking-wide w-max font-spartan whitespace-nowrap overflow-hidden text-ellipsis">{props.title}</h2>
          {props.newSms && <div className="mt-2 ml-1 flex justify-center items-center w-6 p-1 small-text bg-cstColor-100 text-white rounded-full ">{props.newSms}</div>}
        </div>
        <p className="text-sm text-sky-800">{props.membersLength} Members</p>
      </div>
    </div>
  );
};
export default ChatDesc;
