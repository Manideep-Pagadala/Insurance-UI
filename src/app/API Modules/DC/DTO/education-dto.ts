export class EducationDto {
    public eduId: number;
    public highestDegree: string;
    public graduationYear: Date;
    public universityName: string;
    public appNumber: number;

    constructor(eduId: number, highestDegree: string, graduationYear: Date, universityName: string, appNumber: number) {
        this.eduId = eduId;
        this.highestDegree = highestDegree;
        this.graduationYear = graduationYear;
        this.universityName = universityName;
        this.appNumber = appNumber;
    }


}
