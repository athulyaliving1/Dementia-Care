import React from "react";
import Quote from  "../Assets/quote.png"



import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Testimonal() {
  return (
    <div>
      <div className="flex items-center justify-between  absolute z-0">
        <div className="w-1/3 bg-white " />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={2}
        >
          <h1 className="text-center text-sky-800 text-xl  font-Poppins font-semibold  md:text-3xl m-5">
            What our customers are saying
          </h1>
          <Slider>
            <Slide index={0} tabIndex="null">
              <div className="">
                <section class="text-gray-600 body-font">
                  <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                          <img
                            alt="testimonial"
                            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-sky-800 bg-gray-100"
                            src={Quote}
                          />
                          <p class="leading-relaxed">
                            Edison bulb retro cloud bread echo park, helvetica
                            stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            Single-origin coffee ennui shaman taiyaki vape DIY
                            tote bag drinking vinegar cronut adaptogen squid
                            fanny pack vaporware.
                          </p>
                          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                            HOLDEN CAULFIELD
                          </h2>
                        </div>
                      </div>
                      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                          <img
                            alt="testimonial"
                            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-sky-800 bg-gray-100 "
                            src={Quote}
                          />
                          <p class="leading-relaxed">
                            Edison bulb retro cloud bread echo park, helvetica
                            stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            Single-origin coffee ennui shaman taiyaki vape DIY
                            tote bag drinking vinegar cronut adaptogen squid
                            fanny pack vaporware.
                          </p>
                          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                            ALPER KAMU
                          </h2>
                        </div>
                      </div>
                      <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center">
                          <img
                            alt="testimonial"
                            class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-sky-800 bg-gray-100"
                            src={Quote}
                          />
                          <p class="leading-relaxed">
                            Edison bulb retro cloud bread echo park, helvetica
                            stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            Single-origin coffee ennui shaman taiyaki vape DIY
                            tote bag drinking vinegar cronut adaptogen squid
                            fanny pack vaporware.
                          </p>
                          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                            HENRY LETHAM
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Slide>
            <Slide index={1}>
              <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-zinc-100 rounded-lg shadow-lg ">
                <div class="flex justify-center -mt-16 md:justify-end">
                  <img
                    class="object-cover w-20 h-20 border-2 border-sky-800 rounded-full "
                    alt="Testimonial avatar"
                    src={Quote}
                  />
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 md:mt-0 md:text-3xl">
                  Lorem ipsum
                </h2>

                <p class="mt-2 text-gray-600 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>

                <div class="flex justify-end mt-4">
                  <p class="text-xl font-medium text-blue-500 ">Lorem ipsum</p>
                </div>
              </div>
              <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-zinc-100 rounded-lg shadow-lg   ">
                <div class="flex justify-center -mt-16 md:justify-end">
                  <img
                    class="object-cover w-20 h-20 border-2 border-sky-800 rounded-full "
                    alt="Testimonial avatar"
                    src={Quote}
                  />
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 md:mt-0 md:text-3xl">
                  Lorem ipsum
                </h2>

                <p class="mt-2 text-gray-600 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>

                <div class="flex justify-end mt-4">
                  <p class="text-xl font-medium text-blue-500 ">John Doe</p>
                </div>
              </div>
            </Slide>
          </Slider>
          <div className="flex items-center mt-8">
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
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
