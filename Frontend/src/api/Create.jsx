import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://localhost:5001`, 
});

const createBook = async (bookRequest) => {
    try {
        const response = await axiosInstance.post(`/crearLibro`, bookRequest);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

export default createBook;
