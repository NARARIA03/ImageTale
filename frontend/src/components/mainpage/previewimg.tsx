import { useState, useEffect } from "react";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";
import img5 from "../../img/img5.jpg";
import img6 from "../../img/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function PreviewImg(): JSX.Element {
  const [currentImages, setCurrentImages] = useState<string[]>(images);
  const [transformValue, setTransformValue] = useState<number>(0);

  useEffect(() => {
    // 9초마다 이미지 배열 state 뒤에 images 배열 추가
    const appendImagesInterval = setInterval(() => {
      setCurrentImages((prevImages) => {
        return [...prevImages, ...images];
      });
    }, 15000);

    // 0.1초마다 왼쪽으로 0.5씩 밀어줌
    const transInterval = setInterval(() => {
      setTransformValue((prev) => prev + 0.3);
    }, 100);

    return () => {
      clearInterval(appendImagesInterval);
      clearInterval(transInterval);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex whitespace-nowrap transition-transform duration-500"
        style={{ transform: `translateX(-${transformValue}%)` }}
      >
        {currentImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-64 m-12 rounded-[35px] shadow-2xl shadow-stone-600"
          />
        ))}
      </div>
    </div>
  );
}
