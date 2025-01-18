export class Equ {
    equId: string;
    equName: string;
    equType: string;
    assignStaff: string;
    assignField: string;

    constructor(equId: string, equName: string, equType: string, assignStaff: string, assignField: string) {
        this.equId = equId;
        this.equName = equName;
        this.equType = equType;
        this.assignStaff = assignStaff;
        this.assignField = assignField;
    }
}