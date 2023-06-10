import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent {

  userDetails: User = {
    id: '',
    name: '',
    email: '',
    phone: '',
    country: '',
    age: 0
  };

  constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.userService.getUser(id)
          .subscribe({
            next: (response) => {
              this.userDetails = response;
            }
          });
        }
      }
    })
  }

  updateUser() {
    this.userService.updateUser(this.userDetails.id, this.userDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['users']);
      }
    });
  }

  /*
  deleteUser(id: string) {
    this.userService.deleteUser(id);
    .subscribe({
      next: (response) => {
        this.router.navigate(['users'])
      }
    });
  }
  */

}
