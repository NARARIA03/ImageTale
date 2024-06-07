import React from "react";

export default function HelperBar(): React.JSX.Element {
  return (
    <div className="w-full h-16 p-6 bg-custom-deepblue flex flex-row items-center">
      <p className="text-lg text-custom-white">
        동화책 생성 및 선택 <span className="pr-2">|</span> 원하는 동화책을 직접 생성하거나 생성되어 있는 동화책을 선택해주세요.
      </p>
    </div>
  );
}
