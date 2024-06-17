from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from storybook import storybook_router
from videosrouter import videos_router
from imagesrouter import images_router
import talkingrouter

app = FastAPI()
app.include_router(storybook_router)
app.include_router(videos_router)
app.include_router(images_router)
app.include_router(talkingrouter.talking_router)


# CORS 설정 추가
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def hello_world() -> dict:
    return {"msg": "hello world"}
