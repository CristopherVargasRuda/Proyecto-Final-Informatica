import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import deleteBook from "../../api/Delete";

const BookItem = ({infoBook }) => {
    const axiosInstance = axios.create({
        baseURL: `http://localhost:5002`,
    });
    const { id, titulo, autor, genero, año_publicacion, editorial } = infoBook;
    const navigate = useNavigate(); // Obtén la función de navegación desde react-router-dom

    const handleEdit = () => {
        // Navega a la ruta '/editar' y pasa el libro como estado
        navigate('/editar', { state: { libro: infoBook } });
    };

    const handleDelete = async (id) => {
        try {
            await deleteBook(id);
            alert('Libro eliminado exitosamente');
            window.location.reload();
        } catch (error) {
            console.error("Error al eliminar libro:", error);
        }
    }


    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>
                    <GiWhiteBook /> {titulo}
                </td>
                <td>{autor}</td>
                <td>{genero}</td>
                <td>{año_publicacion}</td>
                <td>{editorial}</td>
                <td>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleEdit}>
                        <CiEdit size={20} />
                    </button>
                    <button type="button" className="btn btn-danger" id="eliminar" onClick={() => handleDelete(id)}>
                        <MdDeleteForever size={20} />
                    </button>
                </td>
            </tr>
        </>
    );
}

export default BookItem;
