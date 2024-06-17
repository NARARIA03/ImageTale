import React from "react";
import storybookBg from "../../img/open-book.png";

interface BookBackgroundProps {
  selectFlag?: boolean;
}

export default function BookBackground({ selectFlag }: BookBackgroundProps): React.JSX.Element {
  const brightnessClass = selectFlag ? "brightness-75" : "";
  return (
    <div className={`w-full h-full absolute flex justify-center items-center bg-custom-white overflow-hidden z-0 ${brightnessClass}`}>
      <div className="sm:w-[640px] md:w-[900px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] relative top-[-5rem]">
        <img src={storybookBg} className="sm:w-[640px] md:w-[900px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] scale-[120%] opacity-50" />
      </div>
    </div>
  );
}
