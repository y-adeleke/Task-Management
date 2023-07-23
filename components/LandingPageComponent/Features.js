import { featureContent } from "@/components/LandingPageComponent/Landing-P-Helper/FeaturesContent";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Features() {
  const [showMore, setShowMore] = useState(3);
  const [ref, inView] = useInView();

  const showMoreHandle = () => {
    setShowMore(6);
  };

  return (
    <section
      id="features"
      className={` bg-cover bg-center feature-bg slide-in`}
    >
      <h1 className="mt-8 text-center text-5xl font-roboto p-8 pt-16 w-9/10 mx-auto">
        Transform Your Project Management Process with These Essential Features.
      </h1>

      <div className="mt-12 p-8  grid grid-cols-3 grid-flow-row gap-10 px-20">
        {featureContent.map((feature, key) => {
          if (key + 1 <= showMore) {
            return (
              <div
                ref={ref}
                className={`glassmorphism p-6 h-full w-full slant-top ${
                  inView && "slide-in"
                }`}
                key={feature.header}
              >
                <div className="p-3 bg-cstColor-300 w-max rounded-full shadow-md">
                  <feature.icon />
                </div>
                <h3 className="mt-8 pb-3 text-3xl text-cstDarkColor-100 font-poppins font-semibold capitalize">
                  {feature.header}
                </h3>
                <p className="font-montserrat pb-2">{feature.subContent}</p>
              </div>
            );
          }
        })}
      </div>
      {showMore != 6 && (
        <div className="flex justify-center pb-4 ">
          <button
            className="mt-8 text-2xl px-5 py-3 bg-black text-cstColor-300 rounded-lg shadow-md transition duration-300 btn font-montserrat hover:bg-cstDarkColor-100  hover:text-white"
            onClick={showMoreHandle}
          >
            See More!
          </button>
        </div>
      )}
    </section>
  );
}
