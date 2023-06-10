import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-charts-display',
  templateUrl: './charts-display.component.html',
  styleUrls: ['./charts-display.component.css']
})
export class ChartsDisplayComponent {

  labeldata: any[] = [];
  setagedata: any[] = [];
  users: User[] = [];
  constructor(private usersService: UsersService) {}
  //constructor() {}

  ngOnInit():void {
    //this.RenderChart();

    this.usersService.getAllUsers()
    .subscribe({
      next: (users) => {
        this.users = users;
        for(let user of users)
        {
          console.log(user.name);
          this.labeldata.push(user.name);
          this.setagedata.push(user.age);
        }
        this.RenderChart();
      },
      error: (response) => {
        console.log(response);
      },
    })
  }

  RenderChart() {
  const ctx = document.getElementById('myChart');

  new Chart("ctx", {
    type: 'bar',
    data: {
      labels: this.labeldata,
      datasets: [{
        label: 'Users',
        data: this.setagedata,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

}
