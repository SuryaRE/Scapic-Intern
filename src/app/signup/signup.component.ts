import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../../Models/user.model';
import { AuthService } from '../services/Auth.service';
import { Router , ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  fstate: Boolean;

  constructor(private authservice: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'name'    : new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'email'   : new FormControl(null, Validators.required),
      'who'     : new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    // console.log(this.signUpForm.value);
   const val = this.signUpForm.value;
    const newUser = new User('', val.password, val.name, val.username, val.email);
    console.log(newUser);
    this.authservice.signUp(newUser).subscribe( data => {
          console.log(data);
          this.router.navigate(['../login'], {relativeTo: this.route});
    });
  }
}
