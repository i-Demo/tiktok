import axios from 'axios';

// Tạo base URL
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// Fake phuong thuc get de tra ra .data lun
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
