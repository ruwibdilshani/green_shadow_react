import {User} from "../../model/User.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : User[] = [{
    email: "admin@gmail.com",
    password: "12345678",
    type: "Manager"
}]

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action){
            state.push(action.payload)
        } ,
        loginUser(state, action : PayloadAction<{ email : string , password : string }>) {
            const { email , password } = action.payload
            const user = state.find((user) => user.email === email && user.password === password );
            if (!user){
                throw new Error('User not found')
            }
        }
    }
})

export const {addUser , loginUser } = userSlice.actions
export default userSlice.reducer