import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EligibiltyService {

  constructor(private client: HttpClient) { }
  checkEligibilty(appNumber: number): Observable<any> {
    return this.client.get<any>(`http://localhost:9096/ed/${appNumber}`);
  }
}
