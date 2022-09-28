import React, { useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import mbbanner from "../../components/Main/Assets/bannermb.jpg";

// import MbBanner1 from "../components/Assets/sm-banner.jpg";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(3)
      .max(15)
      .required(),
    email: yup
      .string()
      .email("That doesn't look like a valid email")
      .required("This field is required."),
    number: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10)
      .max(10)
      .required(),

    textarea: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter text only")
      .min(10)
      .max(40)
      .required(),
  })
  .required();

function MbBanner() {
  // const [status, setStatus] = useState("Submit");
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendDataToAPI = async () => {
    if (!name || !number || !email || !textarea) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    await axios.post(
      "https://contact-app-server-athulya.herokuapp.com/contactdementiacarebangalore",
      {
        name,
        number,
        email,
        textarea,
      }
    );

    // Swal.fire({
    //   icon: "success",
    //   title: "Our Message Has Been Sent!",
    //   text: "Our Team Will Contact You Shortly  ",
    //   showConfirmButton: false,
    //   timer: 2000,
    // });
    navigate("/tkpage");

    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  };
  return (
    <div>
      <div className="block md:grid-cols-2 md:hidden">
        <div className="block md:hidden ss:pt-14 sl:pt-16 ">
          {/* <img
            src="https://athulyahomecare.com/lp/images/sm-banner.png"
            alt="smpic"
          /> */}
          <img src={mbbanner} alt="mbbanner" />
        </div>
        <div className="container font-Ubuntu">
          <div className="mt-5 mb-5 text-justify ">
            <h1 className="flex justify-center p-2 text-xl font-semibold xl:text-3xl font-Ubuntu md:text-white text-sky-800 md:p-5 ">
              Submit Your Details
            </h1>
            <div>
              {
                <div className="p-5">
                  <form onSubmit={handleSubmit(sendDataToAPI)}>
                    <div className="">
                      <div class="relative z-0 mb-6 w-full group">
                        <input
                          {...register("name")}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                          id="name"
                          class="block py-2.5 px-0 w-full text-xl font-semibold   text-gray-900 bg-transparent border-0 border-b-2 border-sky-900 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                          placeholder=" "
                        />
                        <p className="font-semibold text-pink-500">
                          {errors.name?.message}
                        </p>
                        <label
                          for="name"
                          class="peer-focus:font-semibold  text-lg font-semibold   absolute  text-sky-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Full Name
                        </label>
                      </div>
                      <div class="relative z-0 mb-6 w-full group">
                        <input
                          {...register("email")}
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          class="block py-2.5 px-0 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-sky-900 appearance-none   focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                          placeholder=" "
                        />
                        <p className="font-semibold text-pink-500 font-Poppins">
                          {errors.email?.message}
                        </p>
                        <label
                          for="floating_email"
                          class="peer-focus:font-semibold   text-lg  font-semibold    absolute  text-sky-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email address
                        </label>
                      </div>
                      <div class="relative z-0 mb-6 w-full group">
                        <input
                          {...register("number")}
                          onChange={(e) => setNumber(e.target.value)}
                          type="number"
                          name="number"
                          id="number"
                          class="block py-2.5 px-0 w-full  text-lg   font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-sky-900 appearance-none   focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                          placeholder=" "
                        />
                        <p className="font-semibold text-pink-500 font-Poppins">
                          {errors.number?.message}
                        </p>
                        <label
                          for="number"
                          class="peer-focus:font-semibold   text-lg   font-semibold  absolute  text-sky-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Mobile Number
                        </label>
                      </div>
                      <div class="flex flex-col mt-2">
                        <label
                          className="text-lg font-semibold text-sky-800"
                          htmlFor="textarea"
                        >
                          Message
                        </label>
                        <input
                          {...register("textarea")}
                          onChange={(e) => setTextarea(e.target.value)}
                          name="textarea"
                          id="textarea"
                          rows="4"
                          class="peer   w-100 mt-2 py-3 px-3 rounded-lg bg-zinc-100  border-2   border-sky-800   font-semibold focus:border-sky-700 focus:outline-none"
                        />
                        <p className="font-semibold text-pink-500 font-Poppins">
                          {errors.textarea?.message}
                        </p>
                      </div>
                      <div className="flex justify-center md:py-1">
                        <button class="  rounded-md py-3 px-6 m-1 overflow-hidden relative group cursor-pointer border-2  border-sky-800  text-white bg-pink-500 font-bold">
                          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-sky-900 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                          <span class="relative  text-white transition duration-300 group-hover:text-white ease">
                            Submit
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MbBanner;
