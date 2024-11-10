from fastapi import APIRouter, HTTPException
import asyncio
import json
from dotenv import load_dotenv
import os

db = []
load_dotenv()
API_URL = os.getenv("API_URL")

# 목업 데이터, openAI API로 생성하고, json으로 정리를 마친 데이터
# 동화 스토리와, 뼈대 (선택지 트리구조)가 잡혀있는 형태의 데이터


storybook_router = APIRouter()


@storybook_router.get("/storybook/{storybookId}")
async def get_storybook(storybookId: int) -> dict:
    json_file_path = f"./content/{storybookId}.json"

    # 동화 파일이 존재하는지 확인하고 읽어옴
    if not os.path.isfile(json_file_path):
        raise HTTPException(status_code=404, detail="스토리북을 찾을 수 없습니다.")
    with open(json_file_path, "r", encoding="utf-8") as file:
        return_storybook = json.load(file)

    for page in return_storybook.get("data", []):
        page["image"] = f"{API_URL}/storybookimage/{storybookId}/{page['page']}"
        page["talkinghead"] = f"{API_URL}/talkinghead/{storybookId}/{page['page']}"

    await asyncio.sleep(1)  # 2초 지연, 실제 배포 시는 제거
    return return_storybook
