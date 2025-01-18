import closeBtn from '../../../assets/icon/close-btn.svg'
import {useEffect, useState} from "react";
import {Vehicle} from "../../../model/Vehicle.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import vehicleValidation from "../../../util/validation/VehicleValidation.ts";
import {updateVehicle} from "../../../store/slices/VehicleSlice.ts";
import {Staff} from "../../../model/Staff.ts";
import {toast} from "react-toastify";

interface UpdateVehiclePopup {
    closePopupAction: (id:string) => void;
    targetStaffId: string;
}

const UpdateVehiclePopup = ({closePopupAction , targetStaffId}:UpdateVehiclePopup) => {

    const vehicle = useSelector((state: RootState) => state.vehicle)
    const staff = useSelector((state: RootState) => state.staff)
    const [vehicleData, setVehicle] = useState<Vehicle>({
        licensePlateNo: "",
        category: "",
        fuelType: "",
        remarks: "",
        vehicleId: "",
        assignedDriver: ""
    });

    useEffect(() => {
        setVehicle(vehicle.find((vehicle: Vehicle) => vehicle.vehicleId === targetStaffId ) as Vehicle)
    }, []);

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setVehicle((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const updateAction = () => {
        try {
            if (!vehicleValidation(vehicleData)){
                return
            }
            dispatch(updateVehicle(vehicleData))
            toast.success("Vehicle updated successfully.")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div
            id="update-vehicle-popup"
            className="position-absolute start-0 end-0 top-0 bottom-0 w-100 h-auto justify-content-center align-items-center d-flex"
        >
            <div className="w-50 h-auto p-4">
                <img className="float-end" src={closeBtn} onClick={() => closePopupAction("")}/>
                <h2 className="mt-3 mb-3">Update Vehicle</h2>
                <div className="w-100 h-auto form-set">
                    <div className="form-floating mb-3">
                        <select
                            className="form-control staff-combo"
                            id="floatingSelect"
                            aria-label="Floating label select example"
                            name="assignedDriver"
                            value={vehicleData.assignedDriver}
                            onChange={handleChange}
                        >
                            <option value="" selected>None</option>
                            {staff.map((staff: Staff) => (
                                <option key={staff.staffId} value={staff.staffId}>{staff.firstName} {staff.lastName}</option>
                            ))}
                        </select>
                        <label htmlFor="floatingSelect">Add a staff member</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control remark-text"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={vehicleData.remarks}
                            name="remarks"
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingInput">Remark</label>
                    </div>
                    <button type="button" className="btn btn-outline-success w-100" onClick={updateAction}>Update Vehicle</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateVehiclePopup;