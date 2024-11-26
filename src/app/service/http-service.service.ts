import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseURL = "http://localhost:4200/calculation/"
  constructor(
    private http: HttpClient
  ) { }

  post(num1:string, num2:string, operation:string) {
    return this.http.post<number>(this.baseURL + num1 +"/" + num2 + "/" + operation, null)
  }

}
