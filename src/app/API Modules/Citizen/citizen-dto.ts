export class CitizenDto {

    public citizenId: number;
    public citizenName: string;
    public citizenEmail: string;
    public password: string;
    public phone: number;
    public ssn: string;
    public gender: string;


    constructor(citizenId: number, citizenName: string, citizenEmail: string, password: string, phone: number, ssn: string, gender: string) {
        this.citizenId = citizenId;
        this.citizenName = citizenName;
        this.citizenEmail = citizenEmail;
        this.password = password;
        this.phone = phone;
        this.ssn = ssn;
        this.gender = gender;
    }
}
