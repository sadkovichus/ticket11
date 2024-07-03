import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../../types/user-model/UserModel";

const initialState: UserModel = {
    name: '',
    email: '',
    password: '',
    gender: 'Herr',
    dateBert: '',
    dateNow: '',
    qr: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }: { payload: UserModel | any }) {
            const { name, email, password, gender } = payload;

            state.name = name || email;
            state.email = email;
            state.password = password;
            state.gender = gender
        },
        removeUser(state) {
            state.name = '';
            state.email = '';
            state.password = '';
            state.gender = 'Herr';
            state.dateBert = '';
            state.dateNow = '';
            state.qr = '';
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;