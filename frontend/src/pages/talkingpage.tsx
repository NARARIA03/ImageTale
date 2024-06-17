import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import BookBackground from "../components/storybookpage/bookbackground";
import axios from "axios";

interface Request {
  query: string;
}

interface Message {
  type: "user" | "response";
  text: string;
}

export default function TalkingPage(): React.JSX.Element {
  //   const { storyBookId } = useParams();
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return;
    }
    const userMessage: Message = { type: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);

    const req: Request = { query: inputValue };
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/talking`, req)
      .then((res) => {
        console.log(res);
        const responseMessage: Message = { type: "response", text: res.data.res };
        setMessages((prev) => [...prev, responseMessage]);
      })
      .catch((e) => {
        console.error(e);
      });
    setInputValue("");
  };

  return (
    <div className="w-screen h-screen relative">
      <BookBackground selectFlag={true} />
      <div className="w-full flex flex-col justify-start items-start absolute top-0 p-4 space-y-2">
        {messages.map((message, index) => (
          <div key={index} className={`p-2 rounded-md ${message.type === "user" ? "bg-blue-200 self-start" : "bg-green-200 self-end"}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center absolute bottom-0">
        <input
          type="text"
          placeholder="동화 내용에 관한 질문을 작성해주세요"
          className="w-full border border-custom-black p-4 m-4 rounded-full"
          value={inputValue}
          onChange={handleInput}
        />
        {inputValue && (
          <button className="absolute right-1 p-3 m-6 bg-red-400 rounded-full" onClick={handleSubmit}>
            전송
          </button>
        )}
      </div>
    </div>
  );
}
