import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoryService {

  private API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  createStory(story: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/stories`, story, options)
      .toPromise()
  }

}

