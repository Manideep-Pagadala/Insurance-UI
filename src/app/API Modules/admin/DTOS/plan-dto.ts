export class PlanDto {

    public planId: number;
    public planName: string;
    public planStartDate: Date;
    public planEndDate: Date;
    public comments: string;
    public activeSwitch: string;

    constructor(planId: number, planName: string, planStartDate: Date, planEndDate: Date, comments: string, activeSwitch: string) {
        this.planId = planId;
        this.planName = planName;
        this.planStartDate = planStartDate;
        this.planEndDate = planEndDate;
        this.comments = comments;
        this.activeSwitch = activeSwitch;
    }
}
