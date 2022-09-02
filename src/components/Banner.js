import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object({
  name: Yup.string().required().min(3).max(15),
  email: Yup.string()
    .email("That doesn't look like a valid email")
    .required("This field is required."),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10)
    .max(10)
    .required(),

  textarea: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter text only")
    .min(10)
    .max(40)
    .required(),
}).required();

function Banner() {
  const [status, setStatus] = useState("Submit");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, textarea, number } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      number: number.value,
      textarea: textarea.value,
    };
    let response = await fetch(
      "https://contact-app-server-athulya.herokuapp.com/contactdementiacarebangalore",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );
    setStatus("Submit");
    let result = await response.json();

    if (result.status === "ERROR")
      Swal.fire({
        title: "Error!",
        text: "Something Went Wrong!!!",
        icon: "error",
        confirmButtonText: false,
      });
    else {
      Swal.fire({
        icon: "success",
        title: "Our Message Has Been Sent!",
        text: "Our Team Will Contact You Shortly  ",
        showConfirmButton: false,
        timer: 2000,
      });
    }

    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  };
  return (
    <div className=" bg-zinc-50 pt-5 md:pt-16 md:mt-0  md:block hidden  ">
      <div
        class="
		md:bg-[url('https://athulyahomecare.com/images/baner.jpg')]  h-full w-full bg-cover bg-no-repeat  md:pb-32 "
      >
        <div className="container mx-auto   grid md:grid-cols-2">
          <div className="md:hidden block mt-10 md:mt-0"></div>
          <div className="">
            <div className="container text-justify mt-5 mb-5 ">
              <h1 className="xl:text-3xl  flex justify-center text-xl font-sans font-semibold  md:text-white  text-sky-800 md:p-5 p-2  ">
                Submit Your Details
              </h1>
              <div
                data-aos="fade-up"
                className="grid grid-flow-row  bg-zinc-50  rounded-2xl px-5 p-5 xl:block  font-Poppins"
              >
                <div>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      textarea: "",
                      number: "",
                    }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                      // same shape as initial values
                      console.log(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form onSubmit={formSubmit}>
                        <div className="">
                          <div class="relative z-0 mb-6 w-full group">
                            <Field
                              type="name"
                              name="name"
                              id="floating_name"
                              class="block py-2.5 px-0 w-full text-xl font-Roboto text-gray-900 bg-transparent border-0 border-b-2 border-sky-900 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                              placeholder=" "
                              required
                            />
                            {errors.name && touched.name ? (
                              <p className="text-pink-500 font-Poppins font-semibold">
                                {errors.name}
                              </p>
                            ) : null}
                            <label
                              for="floating_name"
                              class="peer-focus:font-semibold   text-xl font-semibold    absolute  text-sky-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Full Name
                            </label>
                          </div>
                          <div class="relative z-0 mb-6 w-full group">
                            <Field
                              type="email"
                              name="email"
                              id="floating_email"
                              class="block py-2.5 px-0 w-full text-xl font-Robot text-gray-900 bg-transparent border-0 border-b-2 border-sky-900 appearance-none   focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                              placeholder=" "
                              required
                            />
                            {errors.email && touched.email ? (
                              <p className="text-pink-500 font-Poppins font-semibold">
                                {errors.email}
                              </p>
                            ) : null}
                            <label
                              for="floating_email"
                              class="peer-focus:font-semibold   text-xl font-Robot font-semibold   absolute  text-sky-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Email address
                            </label>
                          </div>
                          <div class="relative z-0 mb-6 w-full group">
                            <Field
                              type="number"
                              name="number"
                              id="floating_number"
                              class="block py-2.5 px-0 w-full text-xl font-Robot font-semibold text-gray-900 bg-transparent border-0 border-b-2 border-sky-900 appearance-none   focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                              placeholder=" "
                              required
                            />
                            {errors.number && touched.number ? (
                              <p className="text-pink-500 font-Poppins font-semibold">
                                {errors.number}
                              </p>
                            ) : null}
                            <label
                              for="floating_number"
                              class="peer-focus:font-semibold   text-xl font-semibold    absolute  text-sky-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Mobile Number
                            </label>
                          </div>
                          <div class="flex flex-col mt-2">
                            <label
                              className="text-sky-800  text-xl font-semibold"
                              htmlFor="textarea"
                            >
                              Message
                            </label>
                            <Field
                              name="textarea"
                              id="textarea"
                              rows="4"
                              class="peer   w-100 mt-2 py-3 px-3 rounded-lg bg-zinc-50  border-2   border-sky-800   font-semibold focus:border-sky-700 focus:outline-none"
                            />
                            {errors.textarea && touched.textarea ? (
                              <p className="text-pink-500 font-Poppins font-semibold">
                                {errors.textarea}
                              </p>
                            ) : null}
                          </div>
                          <div className="flex justify-center  md:py-1">
                            <button class="  rounded-md py-3 px-6 m-1 overflow-hidden relative group cursor-pointer border-2  border-sky-800  text-white bg-pink-500 font-bold">
                              <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-sky-900 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span class="relative  text-white transition duration-300 group-hover:text-white ease">
                                {status}
                              </span>
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
