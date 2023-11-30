import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://localhost:5002`,
});

const deleteBook = async (libroId) => {
    try {
        console.log("Libro: ", libroId);
        const response = await axiosInstance.delete(`/eliminarLibro/${Number(libroId)}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

export default deleteBook;
