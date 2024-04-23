import { Injectable } from '@angular/core';
import { IncomeDto } from '../DTO/income-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationDto } from '../DTO/education-dto';
import { KidsinfoDto } from '../DTO/kidsinfo-dto';
import { KidsDto } from '../DTO/kids-dto';
import { SummaryDto } from '../DTO/summary-dto';

@Injectable({
  providedIn: 'root'
})
export class DcService {

  constructor(private client: HttpClient) { }

  saveIncome(income: IncomeDto): Observable<string> {
    return this.client.post("http://localhost:9095/income", income, { responseType: 'text' });
  }
  savekids(kids: KidsinfoDto): Observable<string> {
    return this.client.post("http://localhost:9095/kids", kids, { responseType: 'text' });
  }
  saveEducation(education: EducationDto): Observable<string> {
    return this.client.post("http://localhost:9095/education", education, { responseType: 'text' });
  }
  getSummary(appNumber: number): Observable<SummaryDto> {
    return this.client.get<SummaryDto>(`http://localhost:9095/summary/${appNumber}`, { responseType: 'json' });
  }
}
