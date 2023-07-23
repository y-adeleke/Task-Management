import Link from "next/link";
import { FcParallelTasks } from "react-icons/fc";
import { LinkCst } from "@/General-Helper/Button";

export default function Navbar() {
  return (
    <nav className="bg-cstColor-300 fixed w-screen  flex justify-between items-center h-16 px-12 shadow-md z-50">
      <div className="flex items-center">
        <Link href="/">
          <FcParallelTasks className="text-3xl" />
        </Link>
        <Link
          href="/"
          className="text-cstColor-100  font-bold text-2xl font-playfair italic "
        >
          Task<span className="text-cstColor-200">Tribe</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-10 mr-12 ">
          <Link
            href="#features"
            className="font-montserrat text-gray-700 hover:text-cstColor-200"
          >
            Features
          </Link>
          <Link
            href="#reviews"
            className="font-montserrat text-gray-700 hover:text-cstColor-200"
          >
            Reviews
          </Link>
          <Link
            href="#subscribe"
            className="font-montserrat text-gray-700 hover:text-cstColor-200"
          >
            Subscribe
          </Link>
          <Link
            href="#faq"
            className="font-montserrat text-gray-700 hover:text-cstColor-200"
          >
            Faq
          </Link>
        </div>

        <LinkCst
          href="/authentication/signup"
          className="border-2 py-2 border-cstColor-200 text-cstColor-100"
        >
          Get Started
        </LinkCst>
        <LinkCst
          href="/authentication"
          className="px-4 py-3 bg-cstColor-200 text-gray-100 hover:bg-cstDarkColor-100 hover:text-white "
        >
          Open My Workspace
        </LinkCst>
      </div>
    </nav>
  );
}
