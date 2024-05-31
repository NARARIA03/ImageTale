from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from storybook import storybook_router

app = FastAPI()
app.include_router(storybook_router)


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
