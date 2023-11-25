from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from entidades.libro import db, Libro 
from sqlalchemy.exc import IntegrityError
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Puerto
PORT = 5001

# Configuración BD
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:asd123@postgres_microservicio:5432/CRUD_Libros'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializa extensión SQLAlchemy
db.init_app(app)

@app.route('/crearLibro', methods=['POST'])
def agregar_libro():
    try:
        datos_libro = request.get_json() # devuelve un diccionario con los datos enviados en la solicitud.
        nuevo_libro = Libro(**datos_libro) #utiliza la sintaxis de desempaquetado (**) para pasar los datos del diccionario datos_libro como argumentos a la clase Libro.
        nuevo_libro.guardar()

        mensaje = {"mensaje": "Libro agregado exitosamente"}
        return make_response(jsonify(mensaje), 201)
    except IntegrityError as e:
        mensaje = {"error": "Error de integridad: el libro ya existe"}
        return make_response(jsonify(mensaje), 409)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)

