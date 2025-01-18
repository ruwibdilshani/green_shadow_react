import closeBtn from '../../../assets/icon/close-btn.svg';
import '../../../css/components/Popups/StaffPopup.css';
import React, { useState } from "react";
import { Staff } from "../../../model/Staff.ts";
import {useDispatch} from "react-redux";
import validateStaffMember from "../../../util/validation/StaffValidation.ts";
import {saveStaff} from "../../../store/slices/staffSlice.ts";
import {toast} from "react-toastify";
import {generateUUID} from "../../../util/generateUUID.ts";

interface AddStaffPopupProps {
    closePopupAction: () => void;
}

const AddStaffPopup = ({ closePopupAction }: AddStaffPopupProps) => {
    const [staffMember, setStaffMember] = useState<Staff>({
        staffId: generateUUID("STAFF"),
        firstName: "",
        lastName: "",
        designation: "",
        joinDate: "",
        dob: "",
        gender: "",
        Address: "",
        contactNo: "",
        email: "",
        role: "",
    });

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStaffMember((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveBtnAction = () => {

        if (!validateStaffMember(staffMember)){
            return
        }
        try {
            dispatch(saveStaff(staffMember))
            toast.success("Staff member saved successfully.")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div
            id="save-staff-popup"
            className="position-absolute start-0 end-0 top-0 bottom-0 w-100 h-auto justify-content-center align-items-center d-flex"
        >
            <div className="w-75 h-auto p-4">
                <img className="float-end" src={closeBtn} onClick={closePopupAction} alt="Close" />
                <h2 className="mt-3 mb-3">Save Staff Member</h2>
                <div className="w-100 h-auto form-set d-grid">
                    <div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control first-name-text"
                                name="firstName"
                                value={staffMember.firstName}
                                placeholder="First Name"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control last-name-text"
                                name="lastName"
                                value={staffMember.lastName}
                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control destination-text"
                                name="designation"
                                value={staffMember.designation}
                                placeholder="Designation"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Designation</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="date"
                                className="form-control join-date-text"
                                name="joinDate"
                                value={staffMember.joinDate}
                                placeholder="Join Date"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Join Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="date"
                                className="form-control dob-text"
                                name="dob"
                                value={staffMember.dob}
                                placeholder="Date of Birth"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Date of Birth</label>
                        </div>
                    </div>
                    <div>
                        <div className="form-floating mb-3">
                            <select
                                className="form-control gender-combo"
                                name="gender"
                                value={staffMember.gender}
                                onChange={handleChange}
                                defaultValue=""
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="FEMALE">Female</option>
                                <option value="MALE">Male</option>
                            </select>
                            <label htmlFor="floatingSelect">Gender</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control address-text"
                                name="Address"
                                value={staffMember.Address}
                                placeholder="Address"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control contact-text"
                                name="contactNo"
                                value={staffMember.contactNo}
                                placeholder="Contact No."
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Contact No.</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control email-text"
                                name="email"
                                value={staffMember.email}
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select
                                className="form-control role-combo"
                                name="role"
                                value={staffMember.role}
                                onChange={handleChange}
                                defaultValue=""
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                                <option value="SCIENTIST">SCIENTIST</option>
                                <option value="OTHER">OTHER</option>
                            </select>
                            <label htmlFor="floatingSelect">Role</label>
                        </div>
                        <button type="button" className="btn btn-outline-success w-100" onClick={saveBtnAction}>
                            Save Staff Member
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStaffPopup;
