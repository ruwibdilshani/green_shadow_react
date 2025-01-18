import {Staff} from "../model/Staff.ts";
import {Vehicle} from "../model/Vehicle.ts";

export const convertStaffArrayTo2DArray = (staffArray : Staff[]) => {
    return staffArray.map((staff) => [
        staff.staffId ?? "",
        staff.firstName ?? "",
        staff.lastName ?? "",
        staff.gender ?? "",
        staff.contactNo ?? "",
    ]);
}

export const convertVehicleArrayTo2DArray = (vehicleArray : Vehicle[]) => {
    return vehicleArray.map((vehicle) => [
        vehicle.vehicleId ?? "",
        vehicle.licensePlateNo ?? "",
        vehicle.category ?? "",
        vehicle.fuelType ?? "",
        vehicle.assignedDriver === "" ? "Available" : "Assigned",
    ])
}