import React from "react";

import Heading from "./Heading";
import {
  CarouselProvider,
  Slider,
  Slide,
  //   ButtonBack,
  //   ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function MbTestMonialtest() {
  return (
    <div className="block md:hidden">
      <div>
        <div className="items-center justify-between  absolute z-0 ">
          <div className="w-1/3 bg-white " />
          <div className="w-4/6 ml-16 bg-gray-100 h-full" />
        </div>
        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={3}
          >
            <div className="flex justify-center text-xl mt-5 mb-5 font-semibold ">
              <Heading title=" What Our Client  Are Saying" />
            </div>
            <Slider>
              <Slide index={0} tabIndex="null">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                  className="md:grid grid-flow-col-dense mb-10"
                >
                  <div class="max-w-md   px-8 py-4 mx-auto mt-16 bg-white rounded-lg  ">
                    <div class="flex justify-center -mt-16 md:justify-end">
                      <img
                        class="object-cover w-20 h-20 border-2 border-sky-900 rounded-full "
                        alt="Testimonial avatar"
                        src="https://athulyahomecare.com/images/11.jpg"
                      />
                    </div>

                    <p class="leading-relaxed  md:text-xl font-Roboto opacity-80 text-justify pb-5 ">
                      I have my own share of experience with multiple assisted
                      living facilities. Athulya care services definitely tops
                      the list, very very professional memory care provided by
                      the nurses to my in law. Thank you so much.
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="md:grid grid-flow-col">
                  <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg ">
                    <div class="flex justify-center -mt-16 md:justify-end">
                      <img
                        class="object-cover w-20 h-20 border-2 border-sky-900 rounded-full"
                        alt="Testimonial avatar"
                        src="https://athulyahomecare.com/images/11.jpg"
                      />
                    </div>

                    <p class="leading-relaxed  md:text-xl font-Roboto opacity-80 text-justify pb-5 ">
                      Thank you very much Mr. Sathish Sir who attended the
                      patient. He is very humble and polite to give the services
                      to my grandfather with dementia. He explained the process
                      and diseases in simple terms.
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="md:grid grid-flow-col">
                  <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg ">
                    <div class="flex justify-center -mt-16 md:justify-end">
                      <img
                        class="object-cover w-20 h-20 border-2 border-sky-900 rounded-full"
                        alt="Testimonial avatar"
                        src="https://athulyahomecare.com/images/11.jpg"
                      />
                    </div>

                    <p class="leading-relaxed  md:text-xl font-Roboto opacity-80 text-justify pb-5">
                      Athulya was extremely supportive was very responding
                      immediately in calls and what’s app chat. Completely happy
                      with their care service and appreciate their support and
                      help. Thanks once again.
                    </p>
                  </div>
                </div>
              </Slide>
            </Slider>
            {/* <div className="">
              <ButtonBack
                className="cursor-pointer  "
                role="button"
                aria-label="previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="next slide"
                className="cursor-pointer ml-2 absolute z-30 right-0 mr-8 focus:outline-none "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </ButtonNext>
            </div> */}
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}

export default MbTestMonialtest;
