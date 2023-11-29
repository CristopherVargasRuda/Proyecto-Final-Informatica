import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdEditDocument } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { FaBook } from "react-icons/fa";

const EditForm = () => {

    // Uso de navigate para redireccionar a Home
    const navigate = useNavigate();

    //Variables
    const generos = ["Fantasía", "Ciencia Ficción", "Drama", "Aventura", "Romance", "Histórico",
        "Terror", "Policíaco", "Biografía", "Psicología", "Infantil", "Filosofía", "Arte",
    ];

    // Desestructuración de objeto que viene en la ruta desde Home
    const location = useLocation();
    const { state } = location;
    const { libro } = state;
    const { titulo: initialTitulo, autor: initialAutor, genero: initialGenero, año_publicacion: initialAñoPublicacion, editorial: initialEditorial } = libro || {};

    // States
    const [titulo, setTitulo] = useState(initialTitulo || '');
    const [autor, setAutor] = useState(initialAutor || '');
    const [genero, setGenero] = useState(initialGenero || '');
    const [añoPublicacion, setAñoPublicacion] = useState(initialAñoPublicacion || '');
    const [editorial, setEditorial] = useState(initialEditorial || '');
    const [editMode, setEditMode] = useState(false);

    // Functions
    const enableEditMode = (e) => {
        e.preventDefault();
        setEditMode(true)
    };

    const handleCancel = () => {
        setEditMode(false);
        navigate('/');
    };

    const handleEditConfirm = (e) => {
        e.preventDefault();
        if (!titulo || !autor || !genero || !añoPublicacion || !editorial) {
            alert('Por favor, completa todos los campos antes de guardar.');
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
        setEditMode(false);
    };

    return (
        <>
            <h3><strong>Libro : <FaBook /> {titulo}</strong></h3>
            <form onSubmit={handleEditConfirm} >
                <div className="form-group mb-2">
                    <label htmlFor="inputTitulo"><strong>Título</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título de tu libro"
                        value={titulo}
                        readOnly={!editMode}
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
                        readOnly={!editMode}
                        onChange={(e) => setAutor(e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="inputGenero"><strong>Género</strong></label>
                    <select
                        className="form-select"
                        id="generoLibro"
                        name="generoLibro"
                        disabled={!editMode}
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
                        readOnly={!editMode}
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
                        readOnly={!editMode}
                        onChange={(e) => setEditorial(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-center mt-3">
                    {editMode ? (
                        <>
                            <button type="submit" className="btn btn-primary me-2">
                                <IoIosSave size={20} /> Guardar
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger me-2"
                                onClick={handleCancel}
                            >
                                <MdCancel size={20} /> Cancelar
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="btn btn-success me-2"
                                onClick={enableEditMode}
                            >
                                <MdEditDocument size={20} /> Editar información
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger me-2"
                                onClick={handleCancel}
                            >
                                <MdCancel size={20} /> Cancelar
                            </button>
                        </>
                    )}
                </div>
            </form>
        </>
    );
}

export default EditForm;
