import { useNavigate } from 'react-router-dom';

const Banner = () => {

    // Uso de navigate para redireccionar a Home
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    return (
        <div className="container p-0 mt-2">
            <div className="alert alert-primary d-flex align-items-center gap-3 py-3">
                <img src="pila-de-libros.png" alt="Imagen" width="40" height="40" className='img-fluid cursor-pointer' onClick={goHome} />
                <div>
                    <strong className="fs-4">Biblioteca UD</strong>
                    <p className="m-0">Laura Ramírez - Cristopher Vargas - Cristian Méndez</p>
                </div>
            </div>
        </div>
    )
}

export default Banner