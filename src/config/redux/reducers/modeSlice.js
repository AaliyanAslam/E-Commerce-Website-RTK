import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name : "mode",
    initialState : {
        darkMode : true
    }, 
    reducers: {
        changeModes : (state, action ) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const {changeModes} = modeSlice.actions;
export default modeSlice.reducer;