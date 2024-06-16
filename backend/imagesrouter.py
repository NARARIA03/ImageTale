from fastapi import APIRouter
from fastapi.responses import FileResponse


images_router = APIRouter()


@images_router.get("/storybookimage/{storybook_id}/{page_id}")
def get_storybook_image(storybook_id: int, page_id: int) -> FileResponse:
    path = f"./img/{storybook_id}/{page_id}.png"
    return FileResponse(path, media_type="image/png")
