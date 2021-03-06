import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { StoryService } from '../../services/story.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})


export class UserProfilePageComponent implements OnInit {
  currentUser: any;
  user: any;
  userId: String;
  stories: any;

  constructor(private storyService: StoryService, private authService: AuthService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.userId = params['id']);

    this.userService.getOneUser(this.userId)
    .then((result) => this.user = result);

    this.storyService.getUserStories(this.userId)
    .then((result) => this.stories = result);

    this.currentUser = this.authService.getUser();
  }

  handleStoryEvent(event){
    this.storyService.createStory({event})
    .then((result) => {
      window.location.reload()
    });
  }
}
