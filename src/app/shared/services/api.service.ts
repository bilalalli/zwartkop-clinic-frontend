import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(url: string, queryParams?: any) {
    return this.http.get(url, { params: queryParams });
  }
}
