export class AppDto {
    public appNumber: number;
    public citizenName: string;
    public dob: Date;
    public gender: string;
    public gmail: string;
    public ssn: string;
    public planId: number;
    public citizenId: number;
    public createdDate: Date;
    public updatedDate: Date|null;

    constructor(
        appNumber: number, citizenName: string, dob: Date, gender: string, gmail: string,
        ssn: string, planId: number, citizenId: number, createdDate: Date, updatedDate: Date|null) {
        this.appNumber = appNumber;
        this.citizenName = citizenName;
        this.dob = dob;
        this.gender = gender;
        this.gmail = gmail;
        this.ssn = ssn;
        this.planId = planId;
        this.citizenId = citizenId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}
