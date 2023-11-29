import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://localhost:5001`, 
});

const updateBook = async (id, bookRequest) => {
    try {
        const response = await axiosInstance.put(`/actualizarLibro/${id}`, bookRequest);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default updateBook;
