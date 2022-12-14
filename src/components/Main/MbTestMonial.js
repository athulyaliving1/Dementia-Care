import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Quote from "../Assets/11.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function MbTestimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="block md:hidden">
      <div className="container flex justify-center mx-auto">
        <div className="mt-3 text-3xl font-semibold font-Poppins text-sky-800 ">
          <div className="font-sans text-xl font-semibold md:text-3xl ">
            <h1 className="m-5 text-xl font-semibold text-center text-sky-800 font-Poppins md:text-3xl">
              What Our Clients Are Saying 
            </h1>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div className="container mx-auto">
          <div className=" bg-zinc-100">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div data-aos="flip-left" class="h-full text-center">
                <div className="flex justify-end ">
                  <img
                    alt="testimonial"
                    class="w-20 h-20   mb-8 object-cover object-center rounded-full inline-block border-2 border-sky-800 bg-gray-100"
                    src="https://athulyahomecare.com/images/11.jpg"
                  />
                </div>

                <p class="leading-relaxed  md:text-xl font-Roboto opacity-80 text-justify pb-5 ">
                  Thank you very much Mr. Sathish Sir who attended the patient.
                  He is very humble and polite to give the services to my
                  grandfather with dementia. He explained the process and
                  diseases in simple terms.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="bg-zinc-100 ">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <div className="flex justify-end ">
                  <img
                    alt="testimonial"
                    class="w-20 h-20   mb-8 object-cover object-center rounded-full inline-block border-2 border-sky-800 bg-gray-100"
                    src="https://athulyahomecare.com/images/11.jpg"
                  />
                </div>
                <p class="leading-relaxed  md:text-xl font-Roboto opacity-80 text-justify pb-5 ">
                  I have my own share of experience with multiple assisted
                  living facilities. Athulya care services definitely tops the
                  list, very very professional memory care provided by the
                  nurses to my in law. Thank you so much.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-zinc-100 ">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <div className="flex justify-end ">
                  <img
                    alt="testimonial"
                    class="w-20 h-20   mb-8 object-cover object-center rounded-full inline-block border-2 border-sky-800 bg-gray-100"
                    src="https://athulyahomecare.com/images/11.jpg"
                  />
                </div>
                <p class="leading-relaxed  md:text-xl font-Roboto opacity-80 text-justify pb-5 ">
                  Athulya was extremely supportive was very responding
                  immediately in calls and what???s app chat. Completely happy
                  with their care service and appreciate their support and help.
                  Thanks once again.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MbTestimonial;
