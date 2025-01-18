import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";
import AddVehiclePopup from "../popups/vehicle/AddVehiclePopup.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Vehicle} from "../../model/Vehicle.ts";
import {convertVehicleArrayTo2DArray} from "../../util/ArrayTo2DArray.ts";
import UpdateVehiclePopup from "../popups/vehicle/UpdateVehiclePopup.tsx";
import ViewVehiclePopup from "../popups/vehicle/ViewVehiclePopup.tsx";
import Swal from "sweetalert2";
import {deleteVehicle} from "../../store/slices/VehicleSlice.ts";

const VehicleWall = () => {
    const dataHeaders = [ "Vehicle Code" , "License Plate Nu." , "Category" , "Fuel Type" , "Status" ]
    const [addVehiclePopup, setAddVehiclePopup] = useState(false)
    const [updateVehiclePopup, setUpdateVehiclePopup] = useState(false)
    const [viewVehiclePopup, setViewVehiclePopup] = useState(false)
    const vehicle = useSelector((state: { vehicle: Vehicle[] }) => state.vehicle)
    const [search, setSearch] = useState('')
    const [vehicle2DArray, setVehicle2DArray] = useState(convertVehicleArrayTo2DArray(vehicle))
    const [targetVehicle, setTargetVehicle] = useState<string>("")
    const dispatch = useDispatch()

    const handleAddVehiclePopup = () => {
        setAddVehiclePopup(!addVehiclePopup)
    }

    const handleUpdateVehiclePopup = (id:string) => {
        setUpdateVehiclePopup(!updateVehiclePopup)
        setTargetVehicle(id)
    }

    const handleViewVehiclePopup = (id:string) => {
        setViewVehiclePopup(!viewVehiclePopup)
        setTargetVehicle(id)
    }

    useEffect(() => {
        const filteredStaff = convertVehicleArrayTo2DArray(vehicle).filter((vehicle: string[]) => {
            return vehicle.some((staffData: string) =>
                staffData.toLowerCase().includes(search.toLowerCase())
            );
        });

        setVehicle2DArray(filteredStaff);
    }, [search, vehicle])

    const handleDeleteVehicle = (id:string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this vehicle?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteVehicle(id))
                Swal.fire("Deleted!", "Vehicle has been deleted.", "success");
            } else {
                Swal.fire("Cancelled", "Vehicle deletion cancelled", "info");
            }
        })
    }

    return (
        <>
            {addVehiclePopup && <AddVehiclePopup closePopupAction={handleAddVehiclePopup}/>}
            {updateVehiclePopup && <UpdateVehiclePopup closePopupAction={handleUpdateVehiclePopup} targetStaffId={targetVehicle}/>}
            {viewVehiclePopup && <ViewVehiclePopup closePopupAction={handleViewVehiclePopup} targetStaffId={targetVehicle}/>}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Vehicle Management"} addPopupAction={handleAddVehiclePopup} searchAction={setSearch}/>
                <Table headersData={dataHeaders} bodyData={vehicle2DArray} updatePopupAction={handleUpdateVehiclePopup} viewPopupAction={handleViewVehiclePopup} deletePopupAction={handleDeleteVehicle}/>
            </div>
        </>
    )
}

export default VehicleWall