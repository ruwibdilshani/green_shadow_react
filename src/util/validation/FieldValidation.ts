import {toast} from "react-toastify";

const validateField = (fieldName: string, fieldSize: string, fieldImage1: File, fieldImage2: File) => {
    if (!fieldName) {
        toast.error("Field Name is required");
        return false;
    }
    if (!fieldSize || isNaN(Number(fieldSize)) || Number(fieldSize) <= 0) {
        toast.error("Field Size must be a positive number");
        return false;
    }
    if (!fieldImage1) {
        toast.error("Image 1 is required");
        return false;
    }
    if (!fieldImage2) {
        toast.error("Image 2 is required");
        return false;
    }
    return true;
};

export default validateField