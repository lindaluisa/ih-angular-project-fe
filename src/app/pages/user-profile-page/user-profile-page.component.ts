import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {
  user: Object;
  userId: String;
  story: String;
  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor(private entryService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.userId = params['id']);

    this.entryService.getOneUser(this.userId)
    .then((result) => this.user =result);
  }

  submitForm($event) {
    this.story = $event;
    this.error = '';
    this.feedbackEnabled = true;
    if (story.valid) {
      this.processing = true;
      this.entryService.createStory(story: this.story)
        .then((result) => {
          this.router.navigate(['/users']);
        })
        .catch((err) => {
          this.error = err.error.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
