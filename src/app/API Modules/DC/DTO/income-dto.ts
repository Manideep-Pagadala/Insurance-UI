export class IncomeDto {
    private incomeId: number | null;
    private salaryIncome: number | null;
    private propertyIncome: number | null;
    private appNumber: number | null;

    constructor(incomeId: number | null, salaryIncome: number | null, propertyIncome: number | null, appNumber: number | null) {
        this.incomeId = incomeId;
        this.salaryIncome = salaryIncome;
        this.propertyIncome = propertyIncome;
        this.appNumber = appNumber;
    }

    public getIncomeId(): number | null {
        return this.incomeId;
    }

    public setIncomeId(incomeId: number | null): void {
        this.incomeId = incomeId;
    }

    public getSalaryIncome(): number | null {
        return this.salaryIncome;
    }

    public setSalaryIncome(salaryIncome: number | null): void {
        this.salaryIncome = salaryIncome;
    }

    public getPropertyIncome(): number | null {
        return this.propertyIncome;
    }

    public setPropertyIncome(propertyIncome: number | null): void {
        this.propertyIncome = propertyIncome;
    }

    public getAppNumber(): number | null {
        return this.appNumber;
    }

    public setAppNumber(appNumber: number | null): void {
        this.appNumber = appNumber;
    }
}
