import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  private REST_API_SERVER = 'http://localhost:3000'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // Authorization: 'my author token'
    })
  }
  constructor(private httpClient: HttpClient) { }

  // lấy dữ liệu
  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  //post dữ liệu
  public postComments(payload: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.post<any>(url, payload, this.httpOptions)
  }

}
