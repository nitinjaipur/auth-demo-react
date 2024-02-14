import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        name: '',
        email: '',
        phoneNumber: 0,
        emailVerified: false,
        photoURL: '',
        uid: '',
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action?.payload?.name
            state.email = action?.payload?.email
            state.phoneNumber = action?.payload?.age
            state.emailVerified = action?.payload?.gender
            state.photoURL = action?.payload?.photoURL
            state.uid = action?.payload?.uid
        },
        removeUser: (state) => {
            state.name = ''
            state.email = ''
            state.phoneNumber = 0 
            state.emailVerified = false 
            state.photoURL = ''
            state.uid = ''
        },
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;