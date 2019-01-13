import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';
  genders = ['male', 'female'];
  public signUpForm: FormGroup;
  constructor( ) { }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male')
    });

  }

  onSubmitted() {
    console.log(this.signUpForm);
  }

}
