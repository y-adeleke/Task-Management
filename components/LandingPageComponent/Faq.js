import { FaqData } from "@/components/LandingPageComponent/Landing-P-Helper/FaqContent";
import { ButtonCst } from "@/General-Helper/Button";
import profileImg from "../../public/pictures&svgs/usersprofile/profile8.jpeg";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Faq() {
  const [showMore, setShowMore] = useState(4);
  const [moreQuestionForm, setMoreQuestionForm] = useState(false);
  const [ref, inView] = useInView();
  return (
    <section
      id="faq"
      ref={ref}
      className={`h-auto p-10 pt-20 px-20 font-poppins ${inView && "slide-in"}`}
    >
      <h1 className="text-start text-5xl font-righteous w-5/10 mx-auto pb-1 uppercase text-cstColor-100">
        You have questions. We have answers.
      </h1>
      <p className="text-lg pt-3">
        Quick answers to questions you may have. Have more questions? Kindly,
        reach out to us.
      </p>

      <div className="pt-20 grid grid-cols-2 gap-x-20 gap-y-14 transition ease-in-out duration-200 relative">
        {FaqData.map((content, key) => {
          //key counts from 0
          if (key + 1 <= showMore) {
            return (
              <div className="flex slide-in" key={key}>
                <div className="p-2 rounded-md border-2 h-max border-cstColor-100">
                  <content.icon className="text-xl" />
                </div>
                <div className="pl-2">
                  <h3 className="font-bold pb-1 font-poppins">
                    {content.question}
                  </h3>
                  <p className="pl-2 ml-4 text-gray-800 font-montserrat border-2 border-transparent border-l-cstColor-100">
                    {content.answer}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
      {showMore != FaqData.length && <div className="shadow"></div>}
      {showMore != FaqData.length && (
        <div className="w-max m-auto mt-8 hover:tranform hover:scale-110 transition duration-200">
          <ButtonCst
            href=""
            className="border-2 py-2 border-gray-200  text-black shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              setShowMore(
                FaqData.length - showMore > 4 ? showMore + 4 : FaqData.length
              );
            }}
          >
            Show more
          </ButtonCst>
        </div>
      )}

      <div
        className={`mt-8 w-3/5 slide-in border-2 rounded-2xl px-4 py-4 m-auto ${
          moreQuestionForm && "bg-cstColor-600 text-white"
        }`}
      >
        {!moreQuestionForm && (
          <div className="flex justify-between slide-in">
            <div className="flex">
              <Image
                src={profileImg}
                alt="profile image"
                className="w-12 h-12 rounded-full mr-2"
                width={400}
                height={400}
              />
              <div>
                <h3>More Questions?</h3>
                <p>You still have more questions? Kidnly reach out.</p>
              </div>
            </div>
            <ButtonCst
              href=""
              className="border-2 py-2 bg-black text-gray-50 "
              onClick={(e) => {
                e.preventDefault();
                setMoreQuestionForm(true);
              }}
            >
              Get in touch
            </ButtonCst>{" "}
          </div>
        )}
        {moreQuestionForm && (
          <div className="w-full px-4 slide-in">
            <h1 className="text-3xl font-righteous">Go On.</h1>
            <h1 className="text-3xl font-righteous">We are listening.</h1>
            <textarea class="mt-6 h-40 w-full resize-none bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white rounded-md"></textarea>
            <div className="mt-8 flex border border-white pl-0 rounded-lg w-full justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className=" text-gray-200 bg-transparent border-0 w-full text-base
            placeholder-gray-400 focus:outline-none focus:ring-0
            "
              />
              <ButtonCst
                className="ml-4 py-2 bg-cstColor-200 text-white shadow-sm scale-95 m-1 mr-2"
                onClick={() => {
                  setMoreQuestionForm(false);
                }}
              >
                Send
              </ButtonCst>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
/*
 */
