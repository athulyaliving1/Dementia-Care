import React from "react";

function Footer() {
  return (
    <div>
      <div class="py-2 text-xs md:text-sm ">
        <div class="w-full border-t-2 border-sky-900"></div>
      </div>
      <div className="py-4 px-8  flex justify-center bg-zinc-50">
        <p className="md:text-lg text-sm  text-sky-900 font-semibold">
          Copyright © {new Date().getFullYear()}
          <span className="text-pink-500"> Athulya Senior care.</span> All
          rights reserved.
        </p>
      </div>
      <div class="">
        <div class="w-full border-t-4 border-sky-900"></div>
      </div>
    </div>
  );
}

export default Footer;