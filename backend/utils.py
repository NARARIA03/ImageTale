from model import MyStoryBook
from typing import List


def check_duplicate_book_gen(
    mystory_inmemory_db: List[MyStoryBook], new_story: MyStoryBook
) -> bool:
    for story in mystory_inmemory_db:
        if story.thumbnail != new_story.thumbnail:
            continue
        if len(story.data) != len(new_story.data):
            continue

        for old_data, new_data in zip(story.data, new_story.data):
            if (
                old_data.content != new_data.content
                or old_data.image != new_data.image
                or old_data.talkinghead != new_data.talkinghead
            ):
                break
        else:
            return True
    return False
