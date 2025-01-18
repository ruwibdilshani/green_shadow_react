import {Field} from "../../model/Field.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: Field[] = []

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        saveField: (state, action : PayloadAction<Field>) => {
            state.push(action.payload)
        },
        updateField: (state, action : PayloadAction<Field>) => {
            return state.map((field: Field) => field.fieldCode === action.payload.fieldCode
                ? action.payload
                : field
            );
        },
        deleteField: (state, action : PayloadAction<string>) => {
            return state.filter((field: Field) => field.fieldCode !== action.payload)
        }
    }
})

export const {saveField, updateField, deleteField} = fieldSlice.actions
export default fieldSlice.reducer