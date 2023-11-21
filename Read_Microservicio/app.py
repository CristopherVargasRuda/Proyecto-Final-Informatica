from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from entidades.libro import db, Libro 
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)

# Puerto
PORT = 5003

# Configuración BD
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:asd123@localhost/CRUD_Libros'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializa extensión SQLAlchemy
db.init_app(app)

@app.route('/obtenerLibros', methods=['GET'])
def obtener_libros():
    try:
        libros = Libro.obtener_todos()
        return jsonify({'libros': libros})
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)

@app.route('/obtenerLibroByID/<int:libro_id>', methods=['GET'])
def obtener_libro(libro_id):
    try:
        libro = Libro.obtener_por_id(libro_id)
        if libro:
            return jsonify(libro)
        else:
            mensaje = {"error": "Libro no encontrado"}
            return make_response(jsonify(mensaje), 404)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)

