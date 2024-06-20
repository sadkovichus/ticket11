import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../../types/user-model/UserModel";

const initialState: UserModel = {
    name: '',
    email: '',
    password: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }: { payload: UserModel | any }) {
            const { name, email, password } = payload;

            state.name = name || email;
            state.email = email;
            state.password = password;
        },
        removeUser(state) {
            state.name = '';
            state.email = '';
            state.password = '';
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;