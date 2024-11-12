import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import * as S from "../styles/pages/TalkingPage.style";

interface Request {
  query: string;
  story: string;
}

interface Message {
  type: "user" | "response";
  text: string;
}

export default function TalkingPage(): JSX.Element {
  const location = useLocation();
  const { myStoryBook } = location.state || {};

  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim() || !myStoryBook) {
      return;
    }
    const story = myStoryBook.data.map((page) => page.content).join(". ");
    console.log(story);
    const userMessage: Message = { type: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);

    const req: Request = { query: inputValue, story: story };
    console.log(inputValue, story, userMessage);
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/talking`, req)
      .then((res) => {
        console.log(res);
        const responseMessage: Message = {
          type: "response",
          text: res.data.answer,
        };
        setMessages((prev) => [...prev, responseMessage]);
      })
      .catch((e) => {
        console.error(e);
      });
    setInputValue("");
  };

  return (
    <S.TalkingPageLayout className="w-screen h-screen relative">
      <S.MessageBox className="w-full flex flex-col justify-start items-start absolute top-0 p-4 space-y-2">
        {messages.map((message, index) => (
          <S.Message
            $type={message.type}
            key={index}
            className={`p-2 rounded-md ${
              message.type === "user"
                ? "bg-blue-200 self-start"
                : "bg-green-200 self-end"
            }`}
          >
            {message.text}
          </S.Message>
        ))}
      </S.MessageBox>

      <S.InputBox $inputValue={inputValue}>
        <input
          type="text"
          placeholder="동화 내용에 관한 질문을 작성해주세요"
          value={inputValue}
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>
          <IoSend size={24} />
        </button>
      </S.InputBox>
    </S.TalkingPageLayout>
  );
}
