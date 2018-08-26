import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/Auth.service';
import { User } from '../../Models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  fstate: Boolean;

  constructor(private router: Router, private route: ActivatedRoute, private authservice: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email'   : new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const val = this.loginForm.value;
    const sUser = new User('', val.password, '', '', val.email);
    console.log(sUser);
      this.authservice.signIn(sUser).subscribe( data => {
     console.log(data);
      this.router.navigate(['../home'], {relativeTo: this.route});
    });
  }

  signUp() {
    this.router.navigate(['../signup'], {relativeTo: this.route});
  }
}
