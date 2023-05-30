import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialRecord } from '../pages/dashboard/financial-record.interface';

@Injectable({
  providedIn: 'root',
})
export class FinancialRecordService {
  private URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    const url = `${this.URL}/categories`;
    return this.http.get<string[]>(url);
  }

  addFinancialRecord(record: FinancialRecord): Observable<void> {
    const url = `${this.URL}/finances`;
    return this.http.post<void>(url, record);
  }
}
