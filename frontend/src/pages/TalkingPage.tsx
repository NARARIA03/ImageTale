import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import * as S from "../styles/pages/TalkingPage.style";
import { MyStoryBook } from "../types/myStoryBookTypes";

interface Message {
  type: "user" | "response";
  text: string;
}

export default function TalkingPage(): JSX.Element {
  const { state } = useLocation() as { state: { myStoryBook: MyStoryBook } };
  const { myStoryBook } = state;

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!inputValue.trim() || !myStoryBook || isSubmitting) return;

      setIsSubmitting(true);
      const story = myStoryBook.data.map((page) => page.content).join(". ");
      const userMessage: Message = { type: "user", text: inputValue };
      setInputValue("");
      setMessages((prev) => [...prev, userMessage]);

      const { data } = await axios.post<{ answer: string }>(
        `${import.meta.env.VITE_APP_API_URL}/talking`,
        {
          query: userMessage.text,
          story: story,
        }
      );
      setMessages((prev) => [...prev, { type: "response", text: data.answer }]);
    } catch (e) {
      setInputValue("");
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
    // 한글 엔터 입력 시 중복으로 들어가는 문제 해결용, "아아" -> 아아 + 아 가 입력되었었음. 두번 요청. 한글 IME 문제
    // 참고: https://bobostown.tistory.com/2
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      await handleSubmit();
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <S.TalkingPageLayout>
      <S.MessageBox>
        {messages.map((message, index) => (
          <S.Message
            $type={message.type}
            key={`${index}${message}`}
            ref={scrollRef}
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
          onKeyDown={handleEnter}
          autoFocus
        />
        <button onClick={handleSubmit}>
          <IoSend />
        </button>
      </S.InputBox>
    </S.TalkingPageLayout>
  );
}
