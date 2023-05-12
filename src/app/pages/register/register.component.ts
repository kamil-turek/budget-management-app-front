import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(32),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.matchValidator('password', 'confirmPassword') }
    );
  }

  matchValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      const error =
        control.value !== matchingControl.value
          ? { match_error: 'Passwords do not match' }
          : null;
      matchingControl.setErrors(error);
    };
  }

  onSubmit(formData: FormGroup) {
    const user: User = {
      firstName: formData.value.firstName,
      lastName: formData.value.lastName,
      email: formData.value.email,
      password: formData.value.password,
    };

    this.authService.registerUser(user).subscribe(
      (result) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user: ', error);
      }
    );
  }
}
