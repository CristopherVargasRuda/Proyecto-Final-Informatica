from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Libro(db.Model):
    __tablename__ = 'libros'
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100), nullable=False)
    autor = db.Column(db.String(100), nullable=False)
    genero = db.Column(db.String(50))
    año_publicacion = db.Column(db.Integer)
    editorial = db.Column(db.String(50))

    def __init__(self, titulo, autor, genero=None, año_publicacion=None, editorial=None):
        self.titulo = titulo
        self.autor = autor
        self.genero = genero
        self.año_publicacion = año_publicacion
        self.editorial = editorial

    def serializar(self):
        return {
            'id': self.id,
            'titulo': self.titulo,
            'autor': self.autor,
            'genero': self.genero,
            'año_publicacion': self.año_publicacion,
            'editorial': self.editorial
        }

    @classmethod
    def obtener_por_id(cls, libro_id):
        libro = cls.query.get(libro_id)
        return libro if libro else None

    def eliminar(self):
        db.session.delete(self)
        db.session.commit()
