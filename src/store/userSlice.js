import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        name: '',
        email: '',
        age: 0,
        gender: '',
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.name,
            state.email = action.email,
            state.age = action.age,
            state.gender = action.gender
        },
        removeUser: (state, action) => {
            state.name = '',
            state.email = '',
            state.age = 0,
            state.gender = ''
        },
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;