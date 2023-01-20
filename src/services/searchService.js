import * as httpRequest from '~/utils/httpRequest';

// Build api search dua vao options params(q, type)
// Goi xong tra ve .data lun
export const search = async (q, type = 'less') => {
    try {
        const response = await httpRequest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
