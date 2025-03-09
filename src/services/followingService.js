import * as httpRequest from '~/utils/httpRequest';

export const getFollowing = async (page = 1) => {
    try {
        const response = await httpRequest.get('/me/followings', {
            params: { page },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
