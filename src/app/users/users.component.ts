import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: any;
  user1Activated: number;
  user2Activated: number;
  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
    console.log(this.users);

    this._userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = id;
        } else if (id === 2) {
          this.user2Activated = id;
        }
      });
    );


  }

}
