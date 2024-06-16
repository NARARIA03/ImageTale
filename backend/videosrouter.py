from fastapi import APIRouter
from fastapi.responses import FileResponse


videos_router = APIRouter()


@videos_router.get("/talkinghead/{storybook_id}/{page_id}")
def get_talkinghead_video(storybook_id: int, page_id: int) -> FileResponse:
    path = f"./videos/{storybook_id}/{page_id}.mp4"
    return FileResponse(path, media_type="video/mp4")
