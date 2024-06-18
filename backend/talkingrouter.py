from fastapi import APIRouter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.llms import OpenAI
from langchain.chains import RetrievalQA
from langchain_community.document_loaders import TextLoader, DirectoryLoader
from dotenv import load_dotenv
import os
from model import QueryType

load_dotenv()
API_KEY = os.getenv("OPENAI_API_KEY")

talking_router = APIRouter()

loader = DirectoryLoader("./content/story2", glob="*.txt", loader_cls=TextLoader)
documents = loader.load()
text_splitter = RecursiveCharacterTextSplitter(chunk_size=100, chunk_overlap=20)
texts = text_splitter.split_documents(documents)
persist_directory = "db"

embedding = OpenAIEmbeddings(openai_api_key=API_KEY)

vectordb = Chroma.from_documents(
    documents=texts, embedding=embedding, persist_directory=persist_directory
)
vectordb.persist()
vectordb = None

vectordb = Chroma(persist_directory=persist_directory, embedding_function=embedding)

retriever = vectordb.as_retriever()

qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(api_key=API_KEY),
    chain_type="stuff",
    retriever=retriever,
    return_source_documents=True,
)


def process_llm_response(llm_response):
    print(llm_response["result"])


@talking_router.post("/talking")
async def talking(req: QueryType) -> dict:
    llm_response = qa_chain(req.query)
    return {"res": llm_response["result"]}
