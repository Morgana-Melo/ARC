from scripts import crud
if __name__ == "__main__":
    db = crud.CRUD()
    db.imprimirTrabalhosPorID(id=1)
