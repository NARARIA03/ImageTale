from fastapi import APIRouter
from PIL import Image
from io import BytesIO
import base64


# 이미지 저장 경로를 입력하면, base64 문자열로 반환해주는 함수
def img_to_base64(image_path: str) -> str:
    with Image.open(image_path) as img:
        if img.mode == "RGBA":
            img = img.convert("RGB")
        buffered = BytesIO()
        img.save(buffered, format="JPEG")
        return base64.b64encode(buffered.getvalue()).decode()


db = []

# 목업 데이터, openAI API로 생성하고, json으로 정리를 마친 데이터라고 가정
# url을 사용해 이미지를 base64로 만들고, 이를 각 data에 포함해야 함
# 그리고 동화책 내용도 함께 데이터에 포함해야 함
mock_story_res = {
    "id": 1,
    "data": [
        {
            "url": "/Users/hyunseong/Documents/capstone/backend/img/test-storybook-img.png",
            "revised_prompt": "A whimsical forest scene with a friendly fox and a curious rabbit, surrounded by tall trees and colorful flowers, in a charming and magical fairy-tale style.",
            "content": "Once upon a time in a whimsical forest, a friendly fox named Felix and a curious rabbit named Rosie became best friends. They loved exploring the forest, discovering new flowers and secret paths. Every day was an adventure filled with laughter and wonder.",
        },
        {
            "url": "/Users/hyunseong/Documents/capstone/backend/img/test-storybook-img2.png",
            "revised_prompt": "A quaint village with small cottages, cobblestone paths, and a gentle stream flowing through, with children playing and animals roaming in a fairy-tale storybook style.",
            "content": "In a quaint village, nestled among rolling hills, children played joyfully along the cobblestone paths and gentle stream. The villagers lived in harmony with nature, and every day was a celebration of life, friendship, and the simple joys of community.",
        },
        {
            "url": "/Users/hyunseong/Documents/capstone/backend/img/test-storybook-img3.png",
            "revised_prompt": "A magical castle on a hilltop overlooking a serene lake, with a dragon flying in the sky and a knight in shining armor standing at the castle gate, illustrated in a whimsical fairy-tale style.",
            "content": "High atop a hill stood a magical castle, where a brave knight named Sir Cedric guarded the kingdom. One day, a friendly dragon named Drago flew over the serene lake to visit the castle. Together, Sir Cedric and Drago embarked on heroic quests, bringing peace and prosperity to the land.",
        },
    ],
}

# 각 데이터 항목에 img 필드를 추가
for item in mock_story_res["data"]:
    image_path = item["url"]
    base64_image = img_to_base64(image_path)
    item["img"] = base64_image

db.append(mock_story_res)


storybook_router = APIRouter()


@storybook_router.get("/storybook/{storybookId}")
async def get_storybook(storybookId: int) -> dict:
    # db 순회하면서 해당 id와 일치하는 동화 찾고, 찾았으면 반환
    for item in db:
        if item["id"] == storybookId:
            return item


# 참고, DALL-E API 반환 형식 및 JSON 구성 계획

# 여기에 동화책 내용 생성 API와 동화 이미지 생성 API를 호출하고 값을 return 받았다고 가정
# DALL-E 반환 JSON 형식은 아래와 같음
"""
{
    "url": "...",
    "revised_prompt": "..."
}
"""
# OpenAI API 로직 쪽에서 이 값을 array로 받아오도록 구현한다고 가정
"""
{
    "data": [
        {
            "url": "...",
            "revised_prompt": "..."
        },
        {
            "url": "...",
            "revised_prompt": "..."
        },
        {
            "url": "...",
            "revised_prompt": "..."
        }
    ]
}
"""
# 이미지 API 로직은 위와 같은 형태로 나오도록 구현할 예정
# 그리고 동화책 text 반환 결과와 합쳐 아래와 같이 합쳐 저장
"""
{
    "data": [
        {
            "url": "...",
            "content": "...",
            "revised_prompt": "..."
        },
        {
            "url": "...",
            "content": "...",
            "revised_prompt": "..."
        },
        {
            "url": "...",
            "content": "...",
            "revised_prompt": "..."
        }
    ]
}
"""
# 여기서, Base64를 사용해 url 부분은 지우고, img로 바꿔준 뒤 동화책의 id를 데이터로 삽입해서 최종적으로 사용
"""
{
    "id": 293842372423,
    "data": [
        {
            "img": "/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
            "content": "...",
            "revised_prompt": "..."
        },
        {
            "img": "/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
            "content": "...",
            "revised_prompt": "..."
        },
        {
            "img": "/9j/4AAQSkZJRgABAQEAAAAAAAD/...",
            "content": "...",
            "revised_prompt": "..."
        }
    ]
}
"""
