import * as httpRequest from '~/utils/httpRequest';

export const postRegister = async (data = {}) => {
    try {
        const response = await httpRequest.post('/auth/register', data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const postLogin = async (data = {}) => {
    try {
        const response = await httpRequest.post('/auth/login', data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
