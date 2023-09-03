import Navbar from "./Navbar";
import { LinkCst } from "@/General-Helper/Button";
import Image from "next/image";
import myPic from "../../public/pictures&svgs/pictures/kelly-sikkema-LM17xCofKA0-unsplash.jpg";
import myPic2 from "../../public/pictures&svgs/pictures/javier-quesada-qYfwGVNJqSA-unsplash.jpg";

export default function Header() {
  return (
    <header className="bg-cover bg-center h-vh background relative">
      <Navbar />
      <div className="grid grid-cols-3">
        <div className="col-span-2 px-12 slide-in">
          <div className="pt-40 text-6xl text-start text-cstDarkColor-100 font-roboto capitalize ">
            <p className="py-2">
              Mazimize <span className="text-cstColor-200">↗</span> Your Productivity with
              <span className="font-playfair italic normal text-cstColor-200 mx-1">
                <span className="text-cstColor-100">Task</span>Tribe
              </span>
              - the ultimate task management tool.
            </p>
          </div>
          <p className="pt-4 pb-10 text-start text-black text-lg font-montserrat">
            Task management made easy! With TaskTribe, you can effortlessly
            <span className="font-extrabold text-cstDarkColor-200"> manage </span>
            your tasks, <span className="font-bextraold text-cstDarkColor-200">collaborate</span> with your team members,
            <span className="font-extrabold text-cstDarkColor-200"> track deadlines</span>, and stay <span className="font-extrabold text-cstDarkColor-200">organized</span> - all in one convenient location. Say goodbye to scattered to-do lists and hello to productivity!
          </p>
          <LinkCst href="/authentication/signup" className="mt-8 text-2xl px-5 py-3 bg-cstDarkColor-100 text-cstColor-300 hover:bg-cstColor-100">
            Get Started
          </LinkCst>{" "}
        </div>

        <div className="col-span-1 pt-32 self-end slide-in">
          <Image src={myPic} alt="picture by kelly-sikkema" className="rounded-2xl" width={370} height={370} />
          <Image src={myPic2} alt="picture by javier-quesada" className="-mt-20 ml-16 rounded-2xl" width={370} height={370} />
        </div>
      </div>
    </header>
  );
}
