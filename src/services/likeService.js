import * as httpRequest from '~/utils/httpRequest';

export const likeVideo = async (id, type = 'like') => {
    try {
        const response = await httpRequest.post(`/videos/${id}/${type}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const likeComment = async (id, type = 'like') => {
    try {
        const response = await httpRequest.post(`/comments/${id}/${type}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
