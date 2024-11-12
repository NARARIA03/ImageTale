from fastapi import APIRouter, HTTPException
from model import MyStoryBook
from utils import check_duplicate_book_gen
import asyncio

mystory_router = APIRouter()

mystory_inmemory_db = []
inmenory_id = 0


@mystory_router.get("/mystory")
async def get_mystory() -> dict:
    try:
        await asyncio.sleep(1)
        return {"res": mystory_inmemory_db}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"에러 발생: {str(e)}")


@mystory_router.post("/mystory")
async def post_mystory(new_story: MyStoryBook) -> dict:
    try:
        if not check_duplicate_book_gen(mystory_inmemory_db, new_story):
            global inmenory_id
            new_story.id = inmenory_id
            inmenory_id += 1
            mystory_inmemory_db.append(new_story)
            return {"msg": "success"}
        else:
            raise ValueError("duplicate")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"에러 발생: {str(e)}")
