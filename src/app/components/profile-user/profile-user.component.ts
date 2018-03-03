import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
