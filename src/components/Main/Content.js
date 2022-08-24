import React from "react";



export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
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
