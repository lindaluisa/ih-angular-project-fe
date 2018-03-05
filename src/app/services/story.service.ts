import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


@Injectable()
export class StoryService {
  
  private API_URL = environment.apiUrl + '/stories';

  constructor(private httpClient: HttpClient) { }

  createStory(story: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}`, story, options)
      .toPromise()
  }

}

