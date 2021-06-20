from scripts import crud
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://127.0.0.1:5500",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/usuarios/{id_usuario}")
def gettrabalhosID(id_usuario: int):        
    db = crud.CRUD()
    return {'statusCode': 200, 'data': db.getTrabalhos(id_usuario)}