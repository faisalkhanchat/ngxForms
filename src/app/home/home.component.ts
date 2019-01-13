import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, Observer } from 'rxjs';
import 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
    const myNumber = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        });

    myNumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObserver = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('first package');
      }, 6000);

    });

    myObserver.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); },
    );

  }

  onLoadServer(id: number) {
    alert('asdf');
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  onLogin() {
    this.authService.logIn();
  }
  onLogout() {
    this.authService.logIn();
  }


}
