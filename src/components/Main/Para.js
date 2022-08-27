import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Para() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="text-center text-sky-800 text-xl  font-Poppins font-semibold  md:text-3xl m-5">
        "Cognitive Disability Doesn't Mean The Journey Has To End."
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="container   mx-auto md:px-0 px-5  md:text-xl font-Roboto opacity-80 text-justify pb-5 "
      >
        <p>
          Our dedicated caregivers are committed to helping your loved ones live
          their best lives in the healthiest ways possible. You and your family
          can relax knowing that your loved one is getting the individualized,
          high-quality, one-on-one care they need. We foster the development of
          a true community for our senior residents with dementia and their
          families. Your loved one's skills, passions, and preferences will be
          supported and developed to their full potential. We are confident that
          residents of our assisted living facility with dementia care may still
          participate in and enjoy life to the fullest. The experience of your
          loved one is tailored by trained and committed team members to make
          sure they are doing what is familiar and comfortable for them.
        </p>
        <br />
        <p>
          Athulya maintains the demands of a premium facility for the elderly
          and the emotions that support them with a staff of competent and
          experienced senior healthcare experts.
        </p>
      </div>
    </div>
  );
}

export default Para;
