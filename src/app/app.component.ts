import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';
  genders = ['Male', 'Female'];
  public signUpForm: FormGroup;
  constructor( ) { }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('Male')
    });

  }

  onSubmitted() {
    console.log(this.signUpForm);
  }

}
