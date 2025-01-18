import { toast } from "react-toastify";
import {Staff} from "../../model/Staff.ts";

const validateStaffMember = (staffMember: Staff): boolean => {
    const {
        firstName,
        lastName,
        designation,
        joinDate,
        dob,
        gender,
        Address,
        contactNo,
        email,
        role,
    } = staffMember;

    // First Name: Only letters, no numbers or special characters
    if (!firstName?.trim() || !/^[a-zA-Z]+$/.test(firstName.trim())) {
        toast.error("First name should only contain letters.");
        return false;
    }

    // Last Name: Required
    if (!lastName?.trim() || !/^[a-zA-Z]+$/.test(lastName.trim())) {
        toast.error("Last name is required.");
        return false;
    }

    // Designation: Required
    if (!designation?.trim()) {
        toast.error("Designation is required.");
        return false;
    }

    // Join Date: Required
    if (!joinDate) {
        toast.error("Join date is required.");
        return false;
    }

    // Date of Birth: Required
    if (!dob) {
        toast.error("Date of birth is required.");
        return false;
    }

    // Gender: Required
    if (!gender) {
        toast.error("Gender is required.");
        return false;
    }

    // Address: If address is entered as a single line, split by commas
    const addressParts = Address?.trim().split(",").map(part => part.trim()) ?? [];
    if (addressParts.length < 3) {
        toast.error("Address should contain at least 3 parts (separated by commas).");
        return false;
    }
    if (addressParts.length > 5) {
        toast.error("Address can contain a maximum of 5 parts.");
        return false;
    }

    // Contact Number: Required and must be 10 digits
    if (!contactNo?.trim() || !/^\d{10}$/.test(contactNo)) {
        toast.error("Contact number is required and must be 10 digits.");
        return false;
    }

    // Email: Valid format
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast.error("A valid email address is required.");
        return false;
    }

    // Role: Required
    if (!role) {
        toast.error("Role is required.");
        return false;
    }

    // If all validations pass
    return true;
};

export default validateStaffMember;
