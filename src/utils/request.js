import axios from 'axios';

// Tạo base URL
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// Fake phuong thuc get de tra ra .data lun
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
