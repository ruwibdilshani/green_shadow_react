import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";
import AddStaffPopup from "../popups/staff/AddStaffPopup.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Staff} from "../../model/Staff.ts";
import {convertStaffArrayTo2DArray} from "../../util/ArrayTo2DArray.ts";
import UpdateStaffPopup from "../popups/staff/UpdateStaffPopup.tsx";
import Swal from 'sweetalert2';
import {deleteStaff} from "../../store/slices/staffSlice.ts";
import ViewStaffPopup from "../popups/staff/ViewStaffPopup.tsx";

const StaffWall = () => {
    const dataHeaders = [ "Staff Id" , "First Name" , "Last Name" , "Gender" , "Contact No" ]
    const [addStaffPopup, setAddStaffPopup] = useState(false)
    const staff = useSelector((state: { staff: Staff[] }) => state.staff)
    const [search, setSearch] = useState('')
    const [staff2DArray, setStaff2DArray] = useState(convertStaffArrayTo2DArray(staff))
    const [updateStaffPopup, setUpdateStaffPopup] = useState(false)
    const [viewStaffPopup, setViewStaffPopup] = useState(false)
    const [targetStaff, setTargetStaff] = useState<string>("")
    const dispatch = useDispatch()

    const handleAddStaffPopup = () => {
        setAddStaffPopup(!addStaffPopup)
    }

    const handleUpdateStaffPopup = (id:string) => {
        setUpdateStaffPopup(!updateStaffPopup)
        setTargetStaff(id)
    }

    const  handelDeleteStaff = (id:string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this staff?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteStaff(id))
                Swal.fire("Deleted!", "Staff has been deleted.", "success");
            } else {
                Swal.fire("Cancelled", "Staff deletion cancelled", "info");
            }
        })
    }

    const handleViewStaffPopup = (id:string) => {
        setViewStaffPopup(!viewStaffPopup)
        setTargetStaff(id)
    }

    useEffect(() => {
        const filteredStaff = convertStaffArrayTo2DArray(staff).filter((staff: string[]) => {
            return staff.some((staffData: string) =>
                staffData.toLowerCase().includes(search.toLowerCase())
            );
        });

        setStaff2DArray(filteredStaff);
    }, [search, staff])

    return(
        <>
            {addStaffPopup && <AddStaffPopup closePopupAction={handleAddStaffPopup} />}
            {updateStaffPopup && <UpdateStaffPopup closePopupAction={handleUpdateStaffPopup} targetStaffId={targetStaff} />}
            {viewStaffPopup && <ViewStaffPopup targetStaffId={targetStaff} closePopupAction={handleViewStaffPopup} />}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Staff Management"} addPopupAction={handleAddStaffPopup} searchAction={setSearch} />
                <Table headersData={dataHeaders} bodyData={staff2DArray} updatePopupAction={handleUpdateStaffPopup} deletePopupAction={handelDeleteStaff} viewPopupAction={handleViewStaffPopup} />
            </div>
        </>
    )
}

export default StaffWall