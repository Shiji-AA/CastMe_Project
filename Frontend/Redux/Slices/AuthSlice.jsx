import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userdata: null, 
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userdata = action.payload;
        },
        logout:(state)=>{
            localStorage.removeItem("token")
            state.userdata = null;
        },
    },
});

export const { setUserInfo ,logout} = authSlice.actions;
export default authSlice.reducer;
