import { EducationDto } from "./education-dto";
import { IncomeDto } from "./income-dto";
import { KidsinfoDto } from "./kidsinfo-dto";

export class SummaryDto {

    public appNumber: number;
    public incomeData: IncomeDto | null;
    public educationData: EducationDto | null;
    public kIdsInfo: KidsinfoDto | null;

    constructor(appNumber: number, incomeData: IncomeDto | null, educationData: EducationDto | null, kIdsInfo: KidsinfoDto | null) {
        this.appNumber = appNumber;
        this.incomeData = incomeData;
        this.educationData = educationData;
        this.kIdsInfo = kIdsInfo;
    }


}
