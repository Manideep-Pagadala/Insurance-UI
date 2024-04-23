export class KidsDto {

    public kidId: number;
    public kidName: string;
    public kidDob: Date;
    public kidSSN: string;
    public appNumber: number;

    constructor(kidId: number, kidName: string, kidDob: Date, kidSSN: string, appNumber: number) {
        this.kidId = kidId;
        this.kidName = kidName;
        this.kidDob = kidDob;
        this.kidSSN = kidSSN;
        this.appNumber = appNumber;
    }


}
