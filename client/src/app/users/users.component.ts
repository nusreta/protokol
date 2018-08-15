import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data:  Array<User>) => {
      this.users = data;     
    });
  }
}
