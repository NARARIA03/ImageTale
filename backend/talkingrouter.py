from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv
import json
import os
from model import QueryType
import openai

load_dotenv()
API_KEY = os.getenv("OPENAI_API_KEY")

talking_router = APIRouter()


@talking_router.post("/talking/{storybookId}")
async def talking(req: QueryType, storybookId: int) -> dict:
    query = req.query
    pageList = req.pageList
    json_file_path = f"./content/{storybookId}.json"

    # 동화 파일이 존재하는지 확인하고 읽어옴
    if not os.path.isfile(json_file_path):
        raise HTTPException(status_code=404, detail="스토리북을 찾을 수 없습니다.")
    with open(json_file_path, "r", encoding="utf-8") as file:
        return_storybook = json.load(file)
    # json 파일 내에서 pageList에 해당하는 content만 뽑음
    contents = [
        page_data["content"]
        for page_number in pageList
        for page_data in return_storybook["data"]
        if page_data["page"] == page_number
    ]

    full_text = " ".join(contents)
    messages = [
        {
            "role": "system",
            "content": "You are a story-based chatbot. Speak in a friendly and casual tone with emojis, and answer questions based on the story provided in full_text.",
        },
        {"role": "system", "content": full_text},
        {"role": "assistant", "content": "이야기 어땠어? 궁금한 거 있으면 물어봐~😊"},
        {"role": "user", "content": query},
    ]

    response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
    answer = response["choices"][0]["message"]["content"]

    return answer
