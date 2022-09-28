import React, { useEffect } from "react";
// import hrs from "../Assets/1.png";
// import PersonalizedCarePlans from "../Assets/2.png";
// import hourNursingCare from "../Assets/3.png";
// import Dailyactivities from "../Assets/4.png";
// import Nutritiousdiet from "../Assets/5.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Iconpage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-zinc-100">
      <div className="container py-16 mx-auto lg:py-28">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="m-5 text-xl font-semibold text-center text-sky-800 font-Poppins md:text-3xl">
            What's Included In Our Dementia Care
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-5"
        >
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://athulyahomecare.com/images/1.png"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold text-center font-Roboto text-sky-800">
                24-hour emergency response system
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://athulyahomecare.com/images/2.png"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold text-center font-Roboto text-sky-800">
                Personalized Care Plans
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://athulyahomecare.com/images/3.png"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold text-center font-Roboto text-sky-800">
                24-hour Nursing Care
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://athulyahomecare.com/images/4.png"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold text-center font-Roboto text-sky-800">
                Daily activities
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://athulyahomecare.com/images/5.png"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold text-center font-Roboto text-sky-800">
                Nutritious diet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iconpage;
