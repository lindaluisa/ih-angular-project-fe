import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  private API_URL = environment.apiUrl + '/users';

  constructor(private httpClient: HttpClient) { }
  
  getUsers(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}`, options)
      .toPromise();
  }

  getOneUser(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${id}`, options)
    .toPromise();
  }
}
