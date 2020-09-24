import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    private httpPost: FundooService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  cartID: string = '';
  ngOnInit(): void {}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  getErrorMessageForEmail() {
    return this.email.hasError('required')
      ? 'Email field cannot be blank'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  getErrorMessageForPassword() {
    return this.password.hasError('required')
      ? 'Password cannot be blank'
      : this.password.hasError('password')
      ? 'Not a valid password'
      : '';
  }

  loginProcess() {
    if (this.email.valid && this.password.valid) {
      var data = {
        cartID: this.cartID,
        email: this.email.value,
        password: this.password.value,
      };
      this.httpPost.conversionValue(data).subscribe((resp) => {
        console.log('new Form HII  :   ', resp);
        this.snackbar.open('Login Successful', 'end now', { duration: 4000 });
        this.router.navigate(['home']);
      }),
        (error) => {
          console.log('newERR: ', error);
        };
    }
  }
}
