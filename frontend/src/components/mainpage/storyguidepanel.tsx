import React from "react";

export default function StoryGuidePanel(): React.JSX.Element {
  return (
    <div className="w-full  p-10 bg-custom-white flex flex-col justify-center items-center">
      <h2 className="text-3xl m-4 text-custom-black">나만의 영어 동화책을 만들어보세요</h2>
      <p className="text-2xl m-4 text-custom-black">새로운 이야기 생성뿐만 아니라 이야기에 맞는 이미지까지!</p>

      <div className="w-2/3 flex flex-row my-10 justify-center items-center">
        <a
          href="/storybook"
          className="block py-2 px-4 mx-4 text-base bg-custom-blue text-custom-white rounded-md shadow-2xl shadow-stone-600"
        >
          새로운 이야기 만들기
        </a>
        <a href="#" className="block py-2 px-4 mx-4 text-base bg-custom-skyblue text-custom-blue rounded-md shadow-2xl shadow-stone-600">
          기존 이야기 선택하기
        </a>
      </div>
    </div>
  );
}
