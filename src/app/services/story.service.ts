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
    console.log(story)
    return this.httpClient.post(`${this.API_URL}`, story, options)
      .toPromise()
  }

  getUserStories(userId): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/user-stories/${userId}`, options)
      .toPromise()
  }

  getOneUserStory(storyId): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/user-story/${storyId}`, options)
      .toPromise()
  }

  createReply(reply: any, storyId: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    const data = {
      reply,
      storyId
    }
    return this.httpClient.post(`${this.API_URL}/new-reply`, data, options)
      .toPromise()
  }

}

