import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users: User[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers()
    .subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (response) => {
        console.log(response);
      },
    })
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id)
    .subscribe({
      next: () => {
        location.reload();
      }
    })
  }
 
}
