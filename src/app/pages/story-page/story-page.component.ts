import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../../services/story.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.css']
})
export class StoryPageComponent implements OnInit {
  storyId: string;
  story: any;
  user: any;
  feedbackEnabled = false;
  error = null;
  processing = false;
  reply: any;
  currentUser: Object;

  constructor(private storyService: StoryService, private authService: AuthService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.storyId = params['id']);

    this.storyService.getOneUserStory(this.storyId)
    .then((result) => { this.story = result } );

    this.currentUser = this.authService.getUser();
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.storyService.createReply(this.reply, this.storyId)
        .then((result) => {
          window.location.reload();
        })
        .catch((err) => {
          this.error = err.error.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
