import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  data = {
    username: String,
    password: String
  }
  // ... model (e,g. username: String)

  constructor( public authService: AuthService, private router: Router ) {}

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      console.log('submit');
      this.processing = true;
      this.authService.signup(this.data)
        .then((result) => {
          console.log('hola');
          this.router.navigate(['']);
          // ... handle result, reset form, etc...
          // ... navigate with this.router.navigate(['...'])
          // ... maybe turn this to false if your're staying on the page - this.processing = false;
        })
        .catch((err) => {
          this.error = err.error.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}

