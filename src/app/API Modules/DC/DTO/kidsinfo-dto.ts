import { KidsDto } from "./kids-dto";

export class KidsinfoDto {

    public  appNumber:number;
	
    public kids: KidsDto[]|null;

    constructor(appNumber: number, kids: KidsDto[]|null) {
        this.appNumber = appNumber;
        this.kids = kids;
    }

    public getAppNumber(): number {
        return this.appNumber;
    }

    public setAppNumber(appNumber: number): void {
        this.appNumber = appNumber;
    }

    public getKids(): KidsDto[]|null {
        return this.kids;
    }

    public setKids(kids: KidsDto[]|null): void {
        this.kids = kids;
    }
}