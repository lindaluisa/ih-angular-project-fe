import { Component, OnInit } from '@angular/core';
import { ListUsersComponent } from '../../components/list-users/list-users.component';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  userList: Array<Object>;


  constructor(private entryService: UserService) { }

  ngOnInit() {
    this.entryService.getUsers()
    .then((result) => this.userList = result);
  }

}

