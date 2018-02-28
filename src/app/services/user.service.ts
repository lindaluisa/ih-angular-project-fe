import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
  
  getUsers(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/users`, options)
      .toPromise();
  }
}
