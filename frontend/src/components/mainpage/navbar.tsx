import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(): React.JSX.Element {
  return (
    <nav className="flex bg-custom-white justify-between p-4 items-center flex-wrap">
      <div>
        <a href="#" className=" text-3xl text-custom-black">
          로고
        </a>
      </div>

      <div className="flex flex-row">
        <Link to="#" className="block p-2 mx-2 text-lg text-custom-black">
          사이트 정보
        </Link>
        <Link to="#" className="block p-2 mx-2 text-lg text-custom-black">
          이용 방법
        </Link>
      </div>

      <div className="flex flex-row">
        <Link
          to="#"
          className="block py-2 px-4 mx-2 text-sm bg-custom-blue text-custom-white rounded-md shadow-2xl shadow-stone-600"
        >
          음성 등록
        </Link>
        <Link
          to="#"
          className="block py-2 px-4 mx-2 text-sm bg-custom-blue text-custom-white rounded-md shadow-2xl shadow-stone-600"
        >
          얼굴 등록
        </Link>
      </div>
    </nav>
  );
}
