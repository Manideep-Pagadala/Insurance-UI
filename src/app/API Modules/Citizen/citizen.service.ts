import { Injectable } from '@angular/core';
import { CitizenDto } from './citizen-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitizenCredentials } from './citizen-credentials';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  constructor(private client: HttpClient) { }

  reg(dto: CitizenDto): Observable<string> {
    return this.client.post("http://localhost:9093/registercitizen", dto, { responseType: 'text' });
  }
  login(dto: CitizenCredentials): Observable<string> {
    return this.client.post("http://localhost:9093/", dto, { responseType: 'text' });
  }
  resetPwd(dto: CitizenDto): Observable<string> {
    return this.client.post("http://localhost:9093/", dto, { responseType: 'text' });
  }

}
