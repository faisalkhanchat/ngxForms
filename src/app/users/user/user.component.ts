import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  private user: any;
  id: number;
  constructor(public route: ActivatedRoute, private usersService: UsersService) { }

  // param observables
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id);
        this.user = this.usersService.getUser(this.id);
      }
    );
  }
  ngOnDestroy() {
  }
  onActivated() {
    this.usersService.userActivated.next(this.id);
  }

}
