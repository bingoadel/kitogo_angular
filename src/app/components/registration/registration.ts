import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationDto } from '../../models/dtos/httpdtos';
import { AuthService } from '../../services/httpservice/authservice';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.css'],

})
export class Registration {
  registrationForm: FormGroup;
  submitted = false;
  registrationSuccess = false;
  resultRegistration: string[] = [];

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  get getControlsInForm() {
    return this.registrationForm.controls;
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registrationForm.valid) {
      this.registrationSuccess = true;
      console.log('formale validierung erfolgreich:', this.registrationForm.value);
      this.tryRegisterNewUser();
    }
  }
  tryRegisterNewUser(): void {
    var password = this.registrationForm.get('password')?.value;
    var email = this.registrationForm.get('email')?.value;
    var dtoRegistration = new RegistrationDto();
    dtoRegistration.email = email;
    dtoRegistration.password = password;
    this.authService.registerUser(dtoRegistration).subscribe({
      next: response => {
        console.log('Registrierung erfolgreich:', response);
      },
      error: err => {
        console.error('Fehler bei der Registrierung:', err);
      }
    });
  }
}
