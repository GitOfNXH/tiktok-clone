import { createSlice } from '@reduxjs/toolkit';

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        value: localStorage.getItem('userData') || {},
    },
    reducers: {
        updateCurrentUser: (state, action) => {
            // state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
