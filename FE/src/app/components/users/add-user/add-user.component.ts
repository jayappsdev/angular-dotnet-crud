import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserRequest: User = {
    id: '',
    name: '',
    email: '',
    phone: '',
    country: '',
    age: 0
  };

  constructor(private userService: UsersService, private router: Router) {}

  addUser() {
    this.userService.addUser(this.addUserRequest)
    .subscribe({
      next: (user) => {
        console.log(user);
        this.router.navigate(['users']);
      }
    });
  }

}
