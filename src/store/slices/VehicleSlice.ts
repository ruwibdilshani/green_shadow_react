import {Vehicle} from "../../model/Vehicle.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: Vehicle[] = []

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        saveVehicle: (state, action) => {
            state.push(action.payload);
        },
        updateVehicle: (state, action) => {
            return state.map((vehicle: Vehicle) => vehicle.vehicleId === action.payload.vehicleId
                ? action.payload
                : vehicle
            );
        },
        deleteVehicle: (state, action : PayloadAction<string>) => {
            return state.filter((vehicle: Vehicle) => vehicle.vehicleId !== action.payload );
        }
    }
})

export const {saveVehicle, updateVehicle, deleteVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;