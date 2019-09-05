import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];
  constructor(readonly usersService: UsersService) { }

  ngOnInit() {
    this.usersService.returnUsers().subscribe( users => 
      this.users = users
      );
  }

}
