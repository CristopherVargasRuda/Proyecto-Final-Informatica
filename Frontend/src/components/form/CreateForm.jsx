import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";

const CreateForm = () => {

    // Uso de navigate para redireccionar a Home
    const navigate = useNavigate();

    //Variables
    const generos = ["Fantasía", "Ciencia Ficción", "Drama", "Aventura", "Romance", "Histórico",
        "Terror", "Policíaco", "Biografía", "Psicología", "Infantil", "Filosofía", "Arte",
    ];



    // States
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [añoPublicacion, setAñoPublicacion] = useState(0);
    const [editorial, setEditorial] = useState('');


    // Functions

    const handleCancel = () => {
        navigate('/');
    };

    const handleCreateConfirm = (e) => {
        e.preventDefault();
        if (!titulo || !autor || !genero || !añoPublicacion || !editorial) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const newData = {
            titulo: titulo,
            autor: autor,
            genero: genero,
            año_publicacion: añoPublicacion,
            editorial: editorial
        }

        console.log(newData);
    };

    return (
        <>
            <form onSubmit={handleCreateConfirm} >
                <div className="form-group mb-2">
                    <label htmlFor="inputTitulo"><strong>Título</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título de tu libro"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="inputAutor"><strong>Autor</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAutor"
                        placeholder="Autor del libro"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="inputGenero"><strong>Género</strong></label>
                    <select
                        className="form-select"
                        id="generoLibro"
                        name="generoLibro"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    >
                        <option value="" disabled>{genero}</option>
                        {generos.map((genero, index) => (
                            <option key={index} value={genero}>{genero}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="inputAño"><strong>Año de publicación</strong></label>
                    <input
                        type="number"
                        id="añoPublicacion"
                        className="form-control"
                        placeholder='Año'
                        min={1}
                        value={añoPublicacion}
                        onChange={(e) => setAñoPublicacion(e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="inputEditorial"><strong>Editorial</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEditorial"
                        placeholder="Editorial"
                        value={editorial}
                        onChange={(e) => setEditorial(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-center mt-3">

                    <button type="submit" className="btn btn-primary me-2">
                        <FaPlusCircle size={20} /> Crear libro
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger me-2"
                        onClick={handleCancel}
                    >
                        <MdCancel size={20} /> Cancelar
                    </button>

                </div>
            </form>
        </>
    );
}

export default CreateForm;
