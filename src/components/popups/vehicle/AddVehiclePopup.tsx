import closeBtn from "../../../assets/icon/close-btn.svg";
import {useState} from "react";
import {Vehicle} from "../../../model/Vehicle.ts";
import {useDispatch} from "react-redux";
import vehicleValidation from "../../../util/validation/VehicleValidation.ts";
import {saveVehicle} from "../../../store/slices/VehicleSlice.ts";
import {toast} from "react-toastify";
import '../../../css/components/Popups/VehiclePopup.css';
import {generateUUID} from "../../../util/generateUUID.ts";

interface AddVehiclePopupProps {
    closePopupAction: () => void;
}

const AddVehiclePopup = ({ closePopupAction } : AddVehiclePopupProps) => {

    const [vehicle, setVehicle] = useState<Vehicle>({
        licensePlateNo: "",
        category: "",
        fuelType: "",
        remarks: "",
        vehicleId: generateUUID("VEHICLE"),
        assignedDriver: ""
    });

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setVehicle((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const saveBtnAction = () => {

        if(!vehicleValidation(vehicle)){
            return
        }

        try {
            dispatch(saveVehicle(vehicle))
            toast.success("Vehicle saved successfully.")
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div
            id="save-vehicle-popup"
            className="position-absolute start-0 end-0 top-0 bottom-0 w-100 h-auto justify-content-center align-items-center d-flex"
        >
            <div className="w-50 h-auto p-4">
                <img className="float-end" src={closeBtn} onClick={closePopupAction}/>
                <h2 className="mt-3 mb-3">Save Vehicle</h2>
                <div className="w-100 h-auto form-set">
                    <div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control license-plate-number"
                                id="floatingInput"
                                placeholder=""
                                name="licensePlateNo"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">License Plate Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control vehicle-category"
                                id="floatingInput"
                                placeholder=""
                                name="category"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Vehicle Category</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control fuel-type"
                                id="floatingInput"
                                placeholder=""
                                name="fuelType"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Fuel Typer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control remarks"
                                id="floatingInput"
                                placeholder=""
                                name="remarks"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Remarks</label>
                        </div>
                    </div>
                    <button type="button" className="btn btn-outline-success w-100" onClick={saveBtnAction}>Save Vehicle</button>
                </div>
            </div>
        </div>
    )
}

export default AddVehiclePopup;