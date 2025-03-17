import * as httpRequest from '~/utils/httpRequest';

export const getVideoList = async (type = 'for-you', page = 1) => {
    try {
        const response = await httpRequest.get('videos', {
            params: { type, page },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getVideo = async path => {
    try {
        const response = await httpRequest.get(path);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
