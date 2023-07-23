const PopupNav = (props) => {
  const { options } = props;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="p-4 py-4 min-w-40 w-max  bg-cstColor-100 shadow-md h-max rounded-2xl text-white flex flex-col slide-in popup"
    >
      {options.map((options, index) => (
        <div
          key={index}
          className="px-2 py-2  hover:bg-gray-100 hover:text-black
           rounded-lg flex justify-between items-center cursor-pointer capitalize font-montserrat"
        >
          <span>{options.option}</span>
        </div>
      ))}
    </div>
  );
};
export default PopupNav;
