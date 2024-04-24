import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoDto } from './co-dto';

@Injectable({
  providedIn: 'root'
})
export class CoService {

  constructor(private client: HttpClient) { }

  fetchPendingNotices(appNumber: number): Observable<CoDto[]> {
    return this.client.get<CoDto[]>(`http://localhost:9097/notices/${appNumber}/Pending`, { responseType: 'json' });
  }

  printNotice(appNumber: number): Observable<string> {
    return this.client.get(`http://localhost:9097/notice/${appNumber}`, { responseType: 'text' })
  }

  fetchHistoryNotices(appNumber: number): Observable<CoDto[]> {
    return this.client.get<CoDto[]>(`http://localhost:9097/notices/${appNumber}/History`, { responseType: 'json' });
  }
}
