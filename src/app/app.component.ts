import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';
  forbiddenUserNames = ['Cheris', 'Anna'];
  genders = ['male', 'female'];
  public signUpForm: FormGroup;
  constructor() { }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        userName: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
    // this.signUpForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signUpForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signUpForm.setValue({
      'userData' : {
        'userName': 'Max',
        'email': 'max@gmail.com'
      },
      'gender': 'male',
      // 'hobbies': ['Playing criket', 'listening music']
      'hobbies': []
    });

    this.signUpForm.patchValue({
      'userData' : {
        'userName': 'John'
      },
    });

  }

  onReset() {
    this.signUpForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  onSubmitted() {
    console.log(this.signUpForm);
  }
  // {nameIsForbidden: true}
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }

      }, 1500);
    });
    return promise;
  }


}
