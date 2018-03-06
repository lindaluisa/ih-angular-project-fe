import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { StoryService } from '../../services/story.service';


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})


export class UserProfilePageComponent implements OnInit {
  user: Object;
  userId: String;
  stories: any;

  constructor(private storyService: StoryService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.userId = params['id']);

    this.userService.getOneUser(this.userId)
    .then((result) => this.user = result);

    this.storyService.getStories(this.userId)
    .then((result) => this.stories = result);
  }

  handleStoryEvent(event){
    this.storyService.createStory({event});
  }



}
