export class Field {
    fieldCode: string;
    fieldName: string;
    fieldSize: string;
    fieldImage1: File | null;
    fieldImage2: File | null;
    location: {
        latitude: number;
        longitude: number;
    };
    assignStaffs: string[];

    constructor(
        fieldCode: string,
        fieldName: string,
        fieldSize: string,
        fieldImage1: File | null = null,
        fieldImage2: File | null = null,
        location: { latitude: number; longitude: number },
        assignStaffs: string[] = []
    ) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldSize = fieldSize;
        this.fieldImage1 = fieldImage1;
        this.fieldImage2 = fieldImage2;
        this.location = location;
        this.assignStaffs = assignStaffs;
    }
}
