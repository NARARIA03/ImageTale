from pydantic import BaseModel
from typing import List, Union


class StoryBookData(BaseModel):
    page: int
    content: str
    nextPage: List[int]
    prevPage: int
    image: str
    talkinghead: str
    choice: Union[str, None]


class StoryBook(BaseModel):
    id: int
    title: str
    data: List[StoryBookData]


class QueryType(BaseModel):
    query: str
    story: str


class MyStoryBookData(BaseModel):
    page: int
    content: str
    image: str
    talkinghead: str


class MyStoryBook(BaseModel):
    id: int
    title: str
    introduction: str
    thumbnail: str
    data: List[MyStoryBookData]
