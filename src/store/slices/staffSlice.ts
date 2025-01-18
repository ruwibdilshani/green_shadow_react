import {Staff} from "../../model/Staff.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : Staff[] = [{
    staffId: "STF001",
    firstName: "John",
    lastName : "Doe",
    designation: "Manager",
    joinDate: "2021-10-01",
    dob: "1990-01-01",
    gender: "MALE",
    contactNo: "1234567890",
    email: "John@gmail.com",
    role: "MANAGER",
    Address: "123, Main Street, New York"
}]

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        saveStaff(state, action : PayloadAction<Staff>){
            state.push(action.payload)
        } ,
        updateStaff(state, action : PayloadAction<Staff>){
            return state.map((staff: Staff) => staff.staffId === action.payload.staffId
                ? action.payload
                : staff
            );
        } ,
        deleteStaff(state, action : PayloadAction<string>){
            return state.filter((staff: Staff) => staff.staffId !== action.payload)
        }
    }
})

export const {saveStaff , updateStaff , deleteStaff} = staffSlice.actions
export default staffSlice.reducer