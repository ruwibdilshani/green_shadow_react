import closeBtn from '../../../assets/icon/close-btn.svg';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {useEffect, useState} from "react";
import {Vehicle} from "../../../model/Vehicle.ts";

interface ViewVehiclePopupProps {
    targetStaffId: string;
    closePopupAction: (id:string) => void;
}

const ViewVehiclePopup = ({ targetStaffId , closePopupAction }:ViewVehiclePopupProps) => {
    const vehicle = useSelector((state: RootState) => state.vehicle);
    const [vehicleData, setVehicleData] = useState<Vehicle | null>(null);

    useEffect(() => {
        const selectedVehicle = vehicle.find((v: Vehicle) => v.vehicleId === targetStaffId) || null;
        setVehicleData(selectedVehicle);
    }, [targetStaffId, vehicle]);

    if (!vehicleData) {
        return null;
    }

    return (
        <div
            id="view-vehicle-popup"
            className="position-absolute start-0 end-0 top-0 bottom-0 w-100 h-auto justify-content-center align-items-center d-flex"
        >
            <div className="w-50 h-auto p-4">
                <img className="float-end" src={closeBtn} onClick={() => {closePopupAction("")}}/>
                <h2 className="mt-3 mb-3">View Vehicle</h2>
                <div className="w-100 h-auto form-set">
                    <div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control vehicle-id-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={vehicleData.vehicleId}
                            />
                            <label htmlFor="floatingInput">Vehicle Id</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control license-plate-number-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={vehicleData.licensePlateNo}
                            />
                            <label htmlFor="floatingInput">License Plate Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control vehicle-category-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={vehicleData.category}
                            />
                            <label htmlFor="floatingInput">Vehicle Category</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control fuel-type-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={vehicleData.fuelType}
                            />
                            <label htmlFor="floatingInput">Fuel Type</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control status-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={ vehicleData.assignedDriver === "" ? "Available" : "Assigned" }
                            />
                            <label htmlFor="floatingInput">Status</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control remark-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={vehicleData.remarks}
                            />
                            <label htmlFor="floatingInput">Remarks</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control staff-id-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={vehicleData.assignedDriver === "" ? "N/A" : vehicleData.assignedDriver}
                            />
                            <label htmlFor="floatingInput">Staff</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewVehiclePopup;