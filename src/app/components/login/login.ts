import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule], // wichtig für *ngIf und formGroup
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;
  submitted = false;
  loginSuccess = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get getControlsInForm() {
    return this.loginForm.controls;
  }

  onSubmit(): void {

    this.submitted = true;
    if (this.loginForm.valid) {
      this.loginSuccess = true;
      console.log('Login erfolgreich:', this.loginForm.value);
    }
  }
}