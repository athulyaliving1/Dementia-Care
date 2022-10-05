import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container py-16 mx-auto lg:py-28 ">
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://athulyahomecare.com/images/496x226-dementi.png"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://athulyahomecare.com/images/238x192-dementia-2.png"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://athulyahomecare.com/images/238x192-dementia-1.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="m-5 text-xl font-semibold text-center text-sky-800 font-Poppins md:text-3xl">
            Holistic Memory Care
          </h1>
          <div className="pb-4 mb-4 border-b border-pink-500 ">
            <p className="text-justify md:text-xl font-Roboto opacity-80">
              Athulya assisted living in Hyderabad offers the kind of care we
              would desire for each one of our loved ones. Led by kindness,
              compassion, and dignity, We are dedicated to defining and
              informing the provision of care for seniors with dementia and
              their families.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b border-pink-500 ">
            <p className="text-justify md:text-xl font-Roboto opacity-80">
              We are specialized in nursing care, dementia care and short-term
              respite care for seniors. The Athulya assisted living facility
              provides an affordable luxury dementia care offering at the heart
              of the community in Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
