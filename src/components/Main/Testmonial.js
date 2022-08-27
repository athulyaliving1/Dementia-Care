import React, { useEffect } from "react";
import Quote from "../Assets/11.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  CarouselProvider,
  Slider,
  Slide,

} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Testimonal() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="md:block  hidden">
      <div className="flex items-center justify-between  absolute z-0  ">
        <div className="w-1/3 bg-white " />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40"
      >
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={1}
        >
          <h1 className="text-center text-sky-800 text-xl  font-Poppins font-semibold  md:text-3xl m-5">
            What Our Clients Are Saying
          </h1>
          <Slider>
            <Slide index={0} tabIndex="null">
              <div className="">
                <section class=" body-font">
                  <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                          <img
                            alt="testimonial"
                            class="w-20 h-20   mb-8 object-cover object-center rounded-full inline-block border-2 border-sky-800 bg-gray-100"
                            src={Quote}
                          />
                          <p class="leading-relaxed  md:text-xl font-Roboto opacity-80 text-justify pb-5 ">
                            Thank you very much Mr. Sathish Sir who attended the
                            patient. He is very humble and polite to give the
                            services to my grandfather with dementia. He
                            explained the process and diseases in simple terms.
                          </p>
                          <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                        </div>
                      </div>
                      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                          <img
                            alt="testimonial"
                            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-sky-800 bg-gray-100 "
                            src={Quote}
                          />
                          <p class="leading-relaxed md:text-xl font-Roboto opacity-80 text-justify pb-5 ">
                            I have my own share of experience with multiple
                            assisted living facilities. Athulya care services
                            definitely tops the list, very very professional
                            memory care provided by the nurses to my in law.
                            Thank you so much.
                          </p>
                          <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                        </div>
                      </div>
                      <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center">
                          <img
                            alt="testimonial"
                            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-sky-800 bg-gray-100"
                            src={Quote}
                          />
                          <p class="leading-relaxed md:text-xl font-Roboto opacity-80 text-justify pb-5">
                            Athulya was extremely supportive was very responding
                            immediately in calls and what’s app chat. Completely
                            happy with their care service and appreciate their
                            support and help. Thanks once again.
                          </p>
                          <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Slide>
          </Slider>
          {/* <div className="flex items-center mt-8">
            <ButtonBack
              className="cursor-pointer "
              role="button"
              aria-label="previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </ButtonNext>
          </div> */}
        </CarouselProvider>
      </div>
    </div>
  );
}
