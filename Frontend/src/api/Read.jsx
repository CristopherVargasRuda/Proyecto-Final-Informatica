import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://localhost:5003`,
});

const getBooks = {
    getAll: async () => {
        try {
            const response = await axiosInstance.get('/obtenerLibros');
            console.log(response);
            return response.data.libros;
        } catch (error) {
            throw error;
        }
    },
    
    getById: async (id) => {
        try {
            const response = await axiosInstance.get(`/obtenerLibroByID/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default getBooks;
