import * as httpRequest from '~/utils/httpRequest';

export const getFollowings = async (page = 1) => {
    try {
        const response = await httpRequest.get('/me/followings', {
            page,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Follow = async (id, type = 'follow') => {
    try {
        const response = await httpRequest.post(`/users/${id}/${type}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
