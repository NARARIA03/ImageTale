import React from "react";
import storybookBg from "../../img/open-book.png";

export default function BookBackground(): React.JSX.Element {
  return (
    <div className="w-full h-full absolute flex justify-center items-center bg-custom-white overflow-hidden z-0">
      <div className="sm:w-[640px] md:w-[900px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] relative top-[-5rem]">
        <img
          src={storybookBg}
          className="sm:w-[640px] md:w-[900px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] scale-[120%] opacity-50"
        />
      </div>
    </div>
  );
}
