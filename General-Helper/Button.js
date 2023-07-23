import Link from "next/link";

export function LinkCst(props) {
  return (
    <Link
      href={props.href}
      className={`px-4 py-2  rounded-lg shadow-md transition duration-200   ${props.className} btn `}
      onClick={props.onClick ? props.onClick : ""}
    >
      {props.children}
    </Link>
  );
}

export function ButtonCst(props) {
  return (
    <button
      className={`px-4 py-2  rounded-lg shadow-md transition duration-200   ${props.className} btn `}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      {props.children}
    </button>
  );
}
