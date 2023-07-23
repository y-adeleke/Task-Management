import { ButtonCst } from "@/General-Helper/Button";
import { LinkCst } from "@/General-Helper/Button";
import { BsListTask } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Footer() {
  const [ref, inView] = useInView();
  return (
    <footer
      id="subscribe"
      className="w-11/12 m-auto rounded-t-2xl p-10 pt-20 font-poppins text-gray-200 shadow-2xl"
    >
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center ${
          inView && "slide-in"
        }`}
      >
        <h1 className="text-3xl font-righteous">Get notified when we launch</h1>
        <p className="text-lg pt-2">
          Stay up to date with the latest news,annoucements, and articles.
        </p>
        <div className="mt-8 flex border border-gray-50 pl-0 rounded-lg">
          <input
            type="text"
            placeholder="Enter your email"
            className=" text-gray-200 bg-transparent border-0 w-72 text-base
            placeholder-gray-400  focus:ring-0 focus:outline-none
            "
          />
          <ButtonCst className="ml-4 py-2 bg-cstColor-200 text-white shadow-sm scale-95 m-1 mr-2">
            Subscribe
          </ButtonCst>
        </div>
      </div>
      <hr className="mt-16 border border-gray-900" />

      <div
        className={`p-8 flex justify-between text-gray-200 font-montserrat  ${
          inView && "slide-in"
        }`}
      >
        <div className="w-1/2">
          <span className="flex items-center text-2xl">
            <BsListTask className="mr-2" />
            <h2 className="font-righteous font-bold">TaskTribe</h2>
          </span>
          <p className="mt-4 w-3/5">
            Stay organized. keep track of your to-do list, deadlines, and
            progress on projects.
          </p>
          <div className="mt-8 w-4/5 flex justify-between font-sans font-bold">
            <Link href="/" className="cursor-pointer hover:text-cstColor-200">
              Overview
            </Link>
            <Link
              href="#features"
              className="cursor-pointer hover:text-cstColor-200"
            >
              Features
            </Link>
            <Link
              href="#reviews"
              className="cursor-pointer hover:text-cstColor-200"
            >
              Reviews
            </Link>
            <Link
              href="#faq"
              className="cursor-pointer hover:text-cstColor-200"
            >
              Faq's
            </Link>
            <Link
              href="#footer"
              className="cursor-pointer hover:text-cstColor-200"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-sans font-bold">Get on board.</span>
          <LinkCst
            href="/authentication/signup"
            className="mt-2 bg-gray-100 text-black shadow-sm"
          >
            Get Started
          </LinkCst>
          <LinkCst
            href="/authentication"
            className="mt-4 bg-cstColor-200 text-white shadow-sm"
          >
            Continue
          </LinkCst>
        </div>
      </div>
      <hr className="mt-16 border border-gray-900" />

      <div
        className={`mt-8 flex justify-between font-montserrat ${
          inView && "slide-in"
        }`}
      >
        <p>&copy; 2023 TaskTribe. All rights reserved.</p>
        <div className="flex">
          <AiOutlineTwitter className="mr-6 text-2xl text-gray-300 hover:text-white cursor-pointer" />
          <AiOutlineInstagram className="mr-6 text-2xl text-gray-300 hover:text-white cursor-pointer" />
          <AiOutlineFacebook className="mr-6 text-2xl text-gray-300 hover:text-white cursor-pointer" />
          <AiOutlineGithub className="mr-6 text-2xl text-gray-300 hover:text-white cursor-pointer" />
          <AiFillLinkedin className="mr-6 text-2xl text-gray-300 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
