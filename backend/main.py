from fastapi import FastAPI


app = FastAPI()


@app.get("/")
async def hello_world() -> dict:
    return {"msg": "hello world"}
