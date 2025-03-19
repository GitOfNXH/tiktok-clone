import httpRequest from '~/utils/httpRequest';

export const getCommentList = async (id, page = 1) => {
    try {
        const response = await httpRequest.get(`videos/${id}p/comments`, {
            page,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postComment = async (id, data) => {
    try {
        const response = await httpRequest.post(`videos/${id}p/comments`, {
            comment: data,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
