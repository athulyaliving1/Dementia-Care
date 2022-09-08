import React from "react";

function NavbarXl() {
  return (
    <div>
      <div className="">
        <div className="bg-zinc-100 w-screen fixed z-50 shadow-xl md:block hidden ">
          <div className="xl:px-40 px-9 flex items-center ">
            <img
              className="xl:w-1/12 md:w-3/12 lg:w-2/12  w-5/12  mt-2 "
              src="https://athulyahomecare.com/lp/images/care.png"
              alt="logo"
            />
            <div class=" md:flex    font-semibold    md:ml-auto">
              <ul className="mt-5 lg:mt-5 md:flex  text-sky-900 font-Poppins     space-x-5 ">
                <li className="flex  mb-3 md:mb-0 md:px-0">
                  <a
                    className="flex"
                    href="tel:098849 45900 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className=" text-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                    098849 45900
                  </a>
                </li>
                <li className="md:flex hidden ">
                  <a
                    className="flex"
                    href="mailto:mailto:enquiryblr@athulyaliving.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="   md:px-1 md:py-1 text-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    enquiryblr@athulyaliving.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarXl;
