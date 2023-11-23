from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from entidades.libro import db, Libro 
from sqlalchemy.exc import IntegrityError
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Puerto
PORT = 5004

# Configuración BD
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:asd123@localhost/CRUD_Libros'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializa extensión SQLAlchemy
db.init_app(app)

@app.route('/actualizarLibro/<int:libro_id>', methods=['PUT'])
def actualizar_libro(libro_id):
    try:
        libro = Libro.obtener_por_id(libro_id)
        if libro:
            datos_actualizados = request.get_json()
            libro.actualizar(datos_actualizados)
            
            mensaje = {"mensaje": "Libro actualizado exitosamente"}
            return make_response(jsonify(mensaje), 200)
        else:
            mensaje = {"error": "Libro no encontrado"}
            return make_response(jsonify(mensaje), 404)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)

