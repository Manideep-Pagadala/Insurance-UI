import { Injectable } from '@angular/core';
import { AppDto } from './app-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private client: HttpClient) { }
  reg(dto: AppDto): Observable<string> {
    return this.client.post("http://localhost:9094/save", dto, { responseType: 'text' });
  }
  getAllApps(): Observable<any>{
    return this.client.get("http://localhost:9094/getAll",{responseType:'json'});
  } 
}
