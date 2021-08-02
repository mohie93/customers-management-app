import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

const baseUrl = 'http://localhost:5000/api/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  searchBy(needle: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${baseUrl}/search/${needle}`);
  }

  OrderBy(attribute: any, direction: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      `${baseUrl}/sort/${attribute}/${direction}`
    );
  }
}
