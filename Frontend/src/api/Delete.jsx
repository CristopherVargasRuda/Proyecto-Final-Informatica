import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://localhost:5002`,
});

const deleteBook = async (libroId) => {
    try {
        const response = await axiosInstance.delete(`/eliminarLibro/${libroId}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

export default deleteBook;
