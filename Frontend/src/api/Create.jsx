import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://localhost:5001`, 
});

const updateBook = async (id, bookRequest) => {
    try {
        const response = await axiosInstance.put(`/actualizarLibro/${id}`, bookRequest);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

export default updateBook;
