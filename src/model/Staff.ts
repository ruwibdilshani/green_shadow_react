export class Staff {
    staffId: string;
    firstName: string;
    lastName: string;
    designation: string;
    joinDate: string;
    dob: string;
    gender: string;
    Address: string;
    contactNo: string;
    email: string;
    role: string;

    constructor(staffId: string, firstName: string, lastName: string, designation: string, joinDate: string , dob: string,gender: string, Address: string, contactNo: string, email: string, role: string) {
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.joinDate = joinDate;
        this.dob = dob;
        this.gender = gender;
        this.Address = Address;
        this.contactNo = contactNo;
        this.email = email;
        this.role = role;
    }
}