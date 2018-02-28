import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  userList: Array<Object>;

  constructor( private entryService: UserService ) { }

  ngOnInit() {
    this.entryService.getUsers()
    .then((result) => this.userList = result);
  }

}

