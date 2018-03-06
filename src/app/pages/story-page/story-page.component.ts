import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../../services/story.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.css']
})
export class StoryPageComponent implements OnInit {
  storyId: String;
  story: any;
  user: any;

  constructor(private storyService: StoryService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.storyId = params['id']);

    this.storyService.getOneUserStory(this.storyId)
    .then((result) => {
      this.story = result
      this.userService.getOneUser(this.story.owner)
      .then((result) => this.user = result);
    });

    
  }

}
