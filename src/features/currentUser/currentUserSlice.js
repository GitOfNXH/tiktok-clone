import { createSlice } from '@reduxjs/toolkit';

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        data: {
            id: null,
            first_name: '',
            last_name: '',
            nickname: '',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/',
            gender: 'female',
            bio: '',
            email: '',
            social_id: '',
            social_type: '',
            social_email: '',
            tick: false,
            date_of_birth: '',
            followings_count: null,
            followers_count: null,
            likes_count: null,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            email_verified_at: '',
            created_at: '',
            updated_at: '',
        },
    },
    reducers: {
        getCurrentUser: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
