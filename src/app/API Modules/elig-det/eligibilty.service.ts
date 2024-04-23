import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EligDto } from './elig-dto';

@Injectable({
  providedIn: 'root'
})
export class EligibiltyService {

  constructor(private http: HttpClient) { }

  checkEligibilty(appNumber: number): Observable<EligDto> {
    return this.http.get<EligDto>(`http://localhost:9096/ed/${appNumber}`);
  }
}
