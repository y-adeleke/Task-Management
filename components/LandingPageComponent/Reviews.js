import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import { ReviewsData } from "@/components/LandingPageComponent/Landing-P-Helper/ReviewsData";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Reviews() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [ref, inView] = useInView();

  const dataLength = ReviewsData.length - 1;
  const moveRightFunc = () => {
    if (activeSlide == dataLength) {
      setActiveSlide(0);
      return;
    }
    setActiveSlide(activeSlide + 1);
  };
  const moveLeftFunc = () => {
    if (activeSlide == 0) {
      setActiveSlide(ReviewsData.length - 1);
      return;
    }
    setActiveSlide(activeSlide - 1);
  };

  let contentActive = ReviewsData[activeSlide];
  let contentRight =
    ReviewsData[`${activeSlide == dataLength ? 0 : activeSlide + 1}`];
  let contentLeft =
    ReviewsData[
      `${activeSlide == 0 ? ReviewsData.length - 1 : activeSlide - 1}`
    ];

  return (
    <section
      id="reviews"
      ref={ref}
      className={`p-6 py-20 h-auto review-bg ${inView && "slide-in"}`}
    >
      <h1 className="text-center text-5xl font-playfair p-8 pb-0  w-5/10 mx-auto">
        Don't take our word for it.
      </h1>
      <h1 className="text-center text-5xl font-playfair pb-8 w-5/10 mx-auto">
        Hear from our users!
      </h1>

      <div className="review-wrapper py-8 mt-10">
        <div className="flex flex-col justify-around review-left p-8 gradient-bg  font-poppins  m-auto rounded-xl text-gray-50">
          <p>{contentLeft.review}</p>
          <div className="flex py-4 justify-self-end">
            <Image
              src={contentLeft.image}
              alt="profile image"
              className="w-12 h-12 rounded-full"
              width={400}
              height={400}
            />
            <div className="pl-4">
              <h2 className="text-lg font-robotoSlab font-bold">
                {contentLeft.name}
              </h2>
              <p className=" ">{contentLeft.title}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-around review-active p-6 font-poppins  m-auto rounded-xl text-gray-50">
          <p>{contentActive.review}</p>
          <div className="flex py-4  justify-self-end">
            <Image
              src={contentActive.image}
              alt="profile image"
              className="w-12 h-12 rounded-full"
              width={400}
              height={400}
            />
            <div className="pl-4 ">
              <h2 className="text-lg font-robotoSlab font-bold">
                {contentActive.name}
              </h2>
              <p className=" ">{contentActive.title}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-around review-right p-8 gradient-bg font-poppins  m-auto rounded-xl text-gray-50">
          <p>{contentRight.review}</p>
          <div className="flex py-4 justify-self-end">
            <Image
              src={contentRight.image}
              alt="profile image"
              className="w-12 h-12 rounded-full"
              width={400}
              height={400}
            />
            <div className="pl-4">
              <h2 className="text-lg font-robotoSlab font-bold">
                {contentRight.name}
              </h2>
              <p className=" ">{contentRight.title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className="border-4 border-cstColor-300 p-3 rounded-full cursor-pointer hover:scale-110"
          onClick={moveLeftFunc}
        >
          <AiOutlineLeft className="text-3xl text-cstColor-300" />
        </div>
        <div
          className="border-4 border-cstColor-300 p-3 rounded-full ml-4 cursor-pointer hover:scale-110"
          onClick={moveRightFunc}
        >
          <AiOutlineRight className="text-3xl text-cstColor-300" />
        </div>
      </div>
    </section>
  );
}
