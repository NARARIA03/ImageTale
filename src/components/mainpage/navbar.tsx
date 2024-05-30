import React from "react";

export default function NavBar(): React.JSX.Element {
  return (
    <nav className="flex bg-custom-white justify-between p-4 items-center flex-wrap">
      <div>
        <a href="#" className=" text-3xl text-custom-black">
          로고
        </a>
      </div>

      <div className="flex flex-row">
        <a href="#" className="block p-2 mx-2 text-lg text-custom-black">
          사이트 정보
        </a>
        <a href="#" className="block p-2 mx-2 text-lg text-custom-black">
          이용 방법
        </a>
        <a href="#" className="block p-2 mx-2 text-lg text-custom-black">
          동화책 생성
        </a>
      </div>

      <div className="flex flex-row">
        <a
          href="#"
          className="block py-2 px-4 mx-2 text-sm bg-custom-blue text-custom-white rounded-md"
        >
          로그인
        </a>
        <a
          href="#"
          className="block py-2 px-4 mx-2 text-sm bg-custom-grey text-custom-black rounded-md"
        >
          회원가입
        </a>
      </div>
    </nav>
  );
}
