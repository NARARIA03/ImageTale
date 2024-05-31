# from PIL import Image
# from io import BytesIO
# import base64

# db = []


# # 이미지 저장 경로를 입력하면, base64 문자열로 반환해주는 함수
# def img_to_base64(image_path: str) -> str:
#     with Image.open(image_path) as img:
#         if img.mode == "RGBA":
#             img = img.convert("RGB")
#         buffered = BytesIO()
#         img.save(buffered, format="JPEG")
#         return base64.b64encode(buffered.getvalue()).decode()


# # 목업 데이터, openAI API로 생성하고, json으로 정리를 마친 데이터라고 가정
# # url을 사용해 이미지를 base64로 만들고, 이를 각 data에 포함해야 함
# mock_story_res = {
#     "id": 1,
#     "data": [
#         {
#             "url": "/Users/hyunseong/Documents/capstone/backend/static/img/test-storybook-img.png",
#             "revised_prompt": "A whimsical forest scene with a friendly fox and a curious rabbit, surrounded by tall trees and colorful flowers, in a charming and magical fairy-tale style.",
#         },
#         {
#             "url": "/Users/hyunseong/Documents/capstone/backend/static/img/test-storybook-img.png",
#             "revised_prompt": "A quaint village with small cottages, cobblestone paths, and a gentle stream flowing through, with children playing and animals roaming in a fairy-tale storybook style.",
#         },
#         {
#             "url": "/Users/hyunseong/Documents/capstone/backend/static/img/test-storybook-img.png",
#             "revised_prompt": "A magical castle on a hilltop overlooking a serene lake, with a dragon flying in the sky and a knight in shining armor standing at the castle gate, illustrated in a whimsical fairy-tale style.",
#         },
#     ],
# }

# # 각 데이터 항목에 img 필드를 추가
# for item in mock_story_res["data"]:
#     image_path = item["url"]
#     base64_image = img_to_base64(image_path)
#     item["img"] = base64_image

# db.append(mock_story_res)
