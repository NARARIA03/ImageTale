from pydantic import BaseModel
from typing import List


class StoryBookData(BaseModel):
    url: str
    revised_prompt: str
    content: str


class StoryBook(BaseModel):
    id: int
    data: List[StoryBookData]
