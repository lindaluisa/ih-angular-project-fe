import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../../services/list-user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  userList: Array<Object>;

  constructor( private entryService: ListUserService ) { }

  ngOnInit() {
    this.entryService.getUsers()
    .then((result) => this.userList = result);
  }

}

