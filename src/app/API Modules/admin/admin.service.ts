import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanDto } from './DTOS/plan-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private client: HttpClient) { }

  savePlan(dto: PlanDto): Observable<string> {
    return this.client.post<string>("http://localhost:9092/registerplan", dto);
  }

  viewPlans(): Observable<PlanDto[]> {
    return this.client.get<PlanDto[]>("http://localhost:9092/getplans");
  }

  saveAccount(dto: PlanDto): Observable<any> {
    return this.client.post("http://localhost:9092/saveAccount", dto);
  }

  viewAccounts(): Observable<any> {
    return this.client.get("http://localhost:9092/viewAccounts");
  }
}
