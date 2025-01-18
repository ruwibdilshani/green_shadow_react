export class Vehicle {
    vehicleId: string;
    licensePlateNo: string;
    category: string;
    fuelType: string;
    remarks: string;
    assignedDriver: string;

    constructor(vehicleId: string, licensePlateNo: string, category: string, fuelType: string, remarks: string, assignedDriver: string) {
        this.vehicleId = vehicleId;
        this.licensePlateNo = licensePlateNo;
        this.category = category;
        this.fuelType = fuelType;
        this.remarks = remarks;
        this.assignedDriver = assignedDriver;
    }
}