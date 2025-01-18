import closeBtn from '../../../assets/icon/close-btn.svg'
import '../../../css/components/Popups/StaffPopup.css'
import React, {useEffect, useState} from "react";
import {Staff} from "../../../model/Staff.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import validateStaffMember from "../../../util/validation/StaffValidation.ts";
import {updateStaff} from "../../../store/slices/staffSlice.ts";
import {toast} from "react-toastify";

interface UpdateStaffPopupProps {
    closePopupAction: (id:string) => void;
    targetStaffId: string;
}

const UpdateStaffPopup = ({ closePopupAction , targetStaffId } : UpdateStaffPopupProps) => {

    const staff = useSelector((state: RootState) => state.staff)
    const[staffData, setStaffData] = useState<Staff>({
        staffId: "",
        firstName: "",
        lastName: "",
        designation: "",
        joinDate: "",
        dob: "",
        Address: "",
        contactNo: "",
        email: "",
        role: "",
        gender : ""
    })
    const dispatch = useDispatch()

    useEffect(() => {
        setStaffData(staff.find((staff: Staff) => staff.staffId === targetStaffId ) as Staff)
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStaffData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateAction = () => {
        if(!validateStaffMember(staffData)){
            return
        }
        dispatch(updateStaff(staffData))
        toast.success("Staff member updated successfully.")
    }

    return (
        <div
            id="update-staff-popup"
            className="position-absolute start-0 end-0 top-0 bottom-0 w-100 h-auto justify-content-center align-items-center d-flex"
        >
            <div className="w-75 h-auto p-4">
                <img className="float-end" src={closeBtn} onClick={() => closePopupAction("")}/>
                <h2 className="mt-3 mb-3">Update Staff Member</h2>
                <div className="w-100 h-auto form-set d-grid">
                    <div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control first-name-text"
                                id="floatingInput"
                                placeholder=""
                                value={staffData?.firstName}
                                name="firstName"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control last-name-text"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={staffData?.lastName}
                                name="lastName"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control destination-text"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={staffData?.designation}
                                name="designation"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Designation</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="date"
                                className="form-control join-date-text"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={staffData?.joinDate}
                                name="joinDate"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Join Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="date"
                                className="form-control dob-text"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={staffData?.dob}
                                name="dob"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Date of Birth</label>
                        </div>
                    </div>
                    <div>
                        <div className="form-floating mb-3">
                            <select
                                className="form-control gender-combo"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                                value={staffData?.gender}
                                name="gender"
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="FEMALE">FEMALE</option>
                                <option value="MALE">MALE</option>
                            </select>
                            <label htmlFor="floatingSelect">Gender</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control address-text"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={staffData?.Address}
                                name="Address"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control contact-text"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={staffData?.contactNo}
                                name="contactNo"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Contact No.</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control email-text"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={staffData?.email}
                                name="email"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select
                                className="form-control role-combo"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                                value={staffData?.role}
                                name="role"
                                onChange={handleChange}
                            >
                                <option value="" disabled selected>Select an option</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                                <option value="SCIENTIST">SCIENTIST</option>
                                <option value="OTHER">OTHER</option>
                            </select>
                            <label htmlFor="floatingSelect">Role</label>
                        </div>
                        <button type="button" className="btn btn-outline-success w-100" onClick={updateAction}>Update Staff Member</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateStaffPopup