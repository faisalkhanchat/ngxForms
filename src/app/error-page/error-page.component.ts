import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['messge'];
    console.log(this.errorMessage);
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }

}