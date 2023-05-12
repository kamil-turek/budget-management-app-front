import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(formData: FormGroup) {
    const email = formData.value.email;
    const password = formData.value.password;

    this.authService.loginUser(email, password).subscribe(
      (result) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error while logging in: ', error);
      }
    );
  }

  logout() {
    this.authService.logout();
  }
}
