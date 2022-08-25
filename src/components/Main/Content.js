import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="grid grid-cols-2 gap-5"
        >
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://res.cloudinary.com/drywqd3hf/image/upload/v1661416248/496x226-dementia_1_hhi3jh.png"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://res.cloudinary.com/drywqd3hf/image/upload/v1661407911/238x192-dementia-2_ojuhqb.png"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://res.cloudinary.com/drywqd3hf/image/upload/v1661407911/238x192-dementia-1_vu9a5j.png"
            alt=""
          />
        </div>
        <div data-aos="fade-left" className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b border-pink-500 ">
            <p className=" md:text-xl font-Roboto opacity-80 text-justify">
              Athulya assisted living in Bangalore offers the kind of care we
              would desire for each one of our loved ones. Led by kindness,
              compassion, and dignity, We are dedicated to defining and
              informing the provision of care for seniors with dementia and
              their families.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b border-pink-500  ">
            <p className="md:text-xl font-Roboto opacity-80 text-justify">
              We are specialized in nursing care, dementia care and short-term
              respite care for seniors. The Athulya assisted living facility
              provides an affordable luxury dementia care offering at the heart
              of the community in Bangalore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
