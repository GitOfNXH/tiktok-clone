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
