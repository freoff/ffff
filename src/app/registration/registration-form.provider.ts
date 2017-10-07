import { Injectable, Provider } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable()
export class RegistrationFormProvider {
  private _email = '';
  private _registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  get registrationForm(): FormGroup {
    return this._registrationForm;
  }

  set defaultEmail(email: string) {
    this._email = email;
  }

  private buildForm() {
    const [require, email] = [Validators.required, Validators.email];

    this._registrationForm = this.fb.group({
      'name': ['', Validators.required],
      'email': [this._email, Validators.required, Validators.email],
      'password': ['', Validators.required],
      'companyName': ['', Validators.required]
    });
  }
}
