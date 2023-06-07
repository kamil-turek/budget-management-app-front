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

  getAllFinancialRecords(): Observable<FinancialRecord[]> {
    const url = `${this.URL}/finances`;
    return this.http.get<FinancialRecord[]>(url);
  }

  deleteFinancialRecord(id: number): Observable<void> {
    const url = `${this.URL}/finances/${id}`;
    return this.http.delete<void>(url);
  }

  getFinancialRecordById(id: number): Observable<FinancialRecord> {
    const url = `${this.URL}/finances/${id}`;
    return this.http.get<FinancialRecord>(url);
  }

  updateFinancialRecord(record: FinancialRecord): Observable<void> {
    const url = `${this.URL}/finances/${record.id}`;
    return this.http.patch<void>(url, record);
  }
}
