from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv
import os
from model import QueryType
import openai

load_dotenv()
API_KEY = os.getenv("OPENAI_API_KEY")

talking_router = APIRouter()


@talking_router.post("/talking")
async def talking(req: QueryType) -> dict:
    query = req.query
    story = req.story
    print(query)
    print(story)

    messages = [
        {
            "role": "system",
            "content": "You are a story-based chatbot. Speak in a friendly and casual tone with emojis, and answer questions based on the story provided in full_text.",
        },
        {"role": "system", "content": story},
        {"role": "assistant", "content": "이야기 어땠어? 궁금한 거 있으면 물어봐~😊"},
        {"role": "user", "content": query},
    ]

    response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
    answer = response["choices"][0]["message"]["content"]

    return {"answer": answer}
