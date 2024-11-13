from fastapi import APIRouter
import random
import asyncio
import unicodedata
from model import VoiceUploadReq

upload_voice_router = APIRouter()

voice = ""


@upload_voice_router.get("/upload")
async def get_upload_voice() -> dict:
    global voice
    if voice == "고예진음성.wav":
        print("고예진음성 업로드됨")
        storybook_id = 3
    elif voice == "이상민교수님.wav":
        print("이상민교수님 업로드됨")
        storybook_id = random.choice([2, 4])
    else:
        print("아무것도 업로드되지 않음")
        storybook_id = random.randint(2, 4)

    return {"id": storybook_id}


@upload_voice_router.post("/upload")
async def post_upload_voice(req: VoiceUploadReq) -> dict:
    global voice
    voice = unicodedata.normalize("NFC", req.fileName)
    await asyncio.sleep(1)
    return {"success": True}
