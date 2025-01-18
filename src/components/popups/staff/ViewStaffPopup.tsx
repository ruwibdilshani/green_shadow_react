import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {useEffect, useState} from "react";
import {Staff} from "../../../model/Staff.ts";
import closeBtn from '../../../assets/icon/close-btn.svg'

interface ViewStaffPopupProps {
    targetStaffId: string;
    closePopupAction: (id:string) => void;
}

const ViewStaffPopup = ({targetStaffId , closePopupAction}: ViewStaffPopupProps) => {
    const staff = useSelector((state: RootState) => state.staff);
    const [staffData, setStaffData] = useState<Staff | null>(null);

    useEffect(() => {
        const selectedStaff = staff.find((s: Staff) => s.staffId === targetStaffId) || null;
        setStaffData(selectedStaff);
    }, [targetStaffId, staff]);

    if (!staffData) {
        return null; // Render nothing or a fallback UI
    }

    return (
        <div
            id="view-staff-popup"
            className="position-absolute start-0 end-0 top-0 bottom-0 w-100 h-auto justify-content-center align-items-center d-flex"
        >
            <div className="w-75 h-auto p-4">
                <img className="float-end" src={closeBtn} alt="Close" onClick={ () => closePopupAction("") } />
                <h2 className="mt-3 mb-3">View Staff Member</h2>
                <div className="w-100 h-auto form-set d-grid">
                    <div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control staff-id-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.staffId}
                            />
                            <label htmlFor="floatingInput">Staff Id</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control first-name-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.firstName}
                            />
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control last-name-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.lastName}
                            />
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control destination-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.designation}
                            />
                            <label htmlFor="floatingInput">Designation</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="date"
                                className="form-control join-date-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.joinDate}
                            />
                            <label htmlFor="floatingInput">Join Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="date"
                                className="form-control dob-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.dob}
                            />
                            <label htmlFor="floatingInput">Date of Birth</label>
                        </div>
                    </div>
                    <div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control gender-combo"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.gender}
                            />
                            <label htmlFor="floatingInput">Gender</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control address-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.Address}
                            />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control contact-text"
                                id="floatingInput"
                                readOnly
                                placeholder=""
                                value={staffData.contactNo}
                            />
                            <label htmlFor="floatingInput">Contact No.</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control email-text"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.email}
                            />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control role-combo"
                                id="floatingInput"
                                placeholder=""
                                readOnly
                                value={staffData.role}
                            />
                            <label htmlFor="floatingInput">Role</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ViewStaffPopup;