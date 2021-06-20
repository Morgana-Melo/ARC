from .connect import Connect

class CRUD(object) :

    def __init__(self) -> None:
        self.database = Connect("..\sql.db")

    def getTrabalhos(self, idUsuario: int):
        resp = self.database.cursor.execute( 'SELECT * FROM Trabalho WHERE Trabalho.idUsuario = ?', (idUsuario,))
        return resp.fetchall()
    
    def imprimirTrabalhosPorID(self, id: int):
        lista = self.getTrabalhos(idUsuario= id)
        print('{:>3s} {:>3s} {:>3s} {:>3s} {:21s} {:>3s}'.format(
            'id', 'idUsuario', 'idPrefeitura', 'idRua', 'titulo', 'status'))
        for c in lista:
            print('{:3d} {:3d} {:3d} {:3d} {:s} {:d}'.format(
                c[0], c[1], c[2],
                c[3], c[4], c[5]))