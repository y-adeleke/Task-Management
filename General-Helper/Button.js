import Link from "next/link";

//This create a link button
export function LinkCst(props) {
  return (
    <Link href={props.href} className={`px-4 py-2  rounded-lg shadow-md transition duration-200   ${props.className} btn `} onClick={props.onClick ? props.onClick : ""}>
      {props.children}
    </Link>
  );
}

///this creates a regular button
export function ButtonCst(props) {
  return (
    <button className={`px-4 py-2  rounded-lg shadow-md transition duration-200 cursor-pointer   ${props.className} btn `} onClick={props.onClick ? props.onClick : () => {}} disabled={props.disabled ? props.disabled : false}>
      {props.children}
    </button>
  );
}
