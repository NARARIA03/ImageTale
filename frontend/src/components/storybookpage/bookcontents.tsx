import React from "react";
import storyImg from "../../img/test-storybook-img.png";

export default function BookContents(): React.JSX.Element {
  return (
    <div className="w-full h-full absolute px-14 pt-7 pb-[5rem]">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src={storyImg}
          className="rounded-2xl shadow-2xl shadow-stone-600 w-2/3"
        />
        <div className="bg-custom-pink w-11/12 h-52 flex justify-center items-center mt-10 rounded-3xl shadow-2xl shadow-stone-600 overflow-hidden">
          <div className="m-10">
            <p className="text-xl break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              nulla illum nemo totam minima minus iste quos consequuntur officia
              aliquam, nostrum sapiente accusantium libero esse aperiam ut illo
              quibusdam dolorem? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis sequi assumenda obcaecati magni quo
              dignissimos nulla molestias pariatur dicta doloribus, vitae
              officia ipsum. Provident soluta, laborum sunt est possimus fugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
