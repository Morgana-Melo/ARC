from datetime import datetime
from .connect import Connect

class CRUD(object) :

    def __init__(self) -> None:
        self.database = Connect("..\sql.db")

    def getTrabalhos(self, idUsuario: int):
        resp = self.database.cursor.execute( 'SELECT * FROM Trabalho WHERE Trabalho.idUsuario = ?', (idUsuario,))
        return resp.fetchall()
    
    def getMessagensTrabalho(self, idTrabalho: int):
        resp = self.database.cursor.execute('SELECT * FROM Mensagem WHERE Mensagem.idTrabalho = ? ORDER BY Mensagem.dia', (idTrabalho,))
        return resp.fetchall()

    def insertMensagemTrabalho(self, idTrabalho: int, idSender: int, idReceive: int, msg: str):
        # current date and time
        now = datetime.now()
        s2 = now.strftime("%Y-%m-%d %H:%M:%S")
        resp = self.database.cursor.execute(
            'INSERT INTO Mensagem (idTrabalho, idSender, idReceive, msg, dia) VALUES(?,?,?,?,?)',
            (idTrabalho, idSender, idReceive, msg, s2))
        self.database.commit_db()
        return resp.fetchone()
        
