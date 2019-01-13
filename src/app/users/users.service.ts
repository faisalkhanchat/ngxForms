import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userActivated = new Subject();
  private users = [
    {
      id: 1,
      name: 'Max',
      status: 'offline'
    },
    {
      id: 2,
      name: 'Anna',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Cheris',
      status: 'offline'
    },
  ];
  constructor() { }

  getUsers() {
    return this.users;
  }
  getUser(id: number) {
    const user = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    return user;
  }

  updateUser(id: number, userInfo: {name: string, status: string}) {
    const user = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    if (user) {
      user.name = userInfo.name;
      user.status = userInfo.status;
    }
  }


}
