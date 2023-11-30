import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

const NavBar = () => {

    // Uso de navigate para redireccionar a CreatePage
    const navigate = useNavigate();

    const [bookId, setBookId] = useState('');

    const handleSearch = () => {
        const id = parseFloat(bookId.trim());
        ((!isNaN(id) &&  id >= 0) ? navigate(`/${id}`): alert('Digita un id válido'));
    };

    const handleNewBook = () => {
        navigate('/crear');
    };

    const goHome = () => {
        setBookId('');
        navigate('/');
        window.location.reload();
    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-3 d-flex align-items-center">
                    <button className="btn btn-success me-2" type="button" onClick={goHome}>
                        <FaBook size={20} />
                    </button>
                    <button className="btn btn-success" type="button" onClick={handleNewBook}>
                        <FaPlus size={20} /> Agregar libro
                    </button>
                </div>

                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar..."
                        value={bookId}
                        onChange={(e) => { setBookId(e.target.value) }}
                    />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-dark" type="button" onClick={handleSearch}>
                        <FaSearch />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
