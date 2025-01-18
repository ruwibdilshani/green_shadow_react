import {Vehicle} from "../../model/Vehicle.ts";
import {toast} from "react-toastify";

const vehicleValidation = (vehicle : Vehicle) =>{
    if(!vehicle.licensePlateNo){
        toast.error("License Plate Number is required")
        return false
    }
    if(!vehicle.licensePlateNo.match(/^[A-Z0-9-]+$/)){
        toast.error("License Plate Number format is invalid")
        return false
    }
    if(!vehicle.category){
        toast.error("Vehicle Category is required")
        return false
    }
    if (!/^[A-Z]/.test(vehicle.category)) {
        toast.error("Vehicle Category format is invalid")
        return false
    }
    if(!vehicle.fuelType){
        toast.error("Fuel Type is required")
        return false
    }
    if (!/^[A-Z]/.test(vehicle.fuelType)) {
        toast.error("Fuel Type format is invalid")
        return false
    }
    if(!vehicle.remarks){
        toast.error("Remarks is required")
        return false
    }
    if(!/^[A-Z]/.test(vehicle.remarks)){
        toast.error("Remarks format is invalid")
        return false
    }
    return true
}

export default vehicleValidation;