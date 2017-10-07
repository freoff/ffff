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

// TODO add validator to companyName (checkdomain in registrationProvider)
  private buildForm() {
    this._registrationForm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.email],
      'password': ['', Validators.required],
      'companyName': ['', Validators.required],
      'country': ['', Validators.required],
      'timeZone': ['', Validators.required],
      'businessSector': ['', Validators.required],
      'website': ['', Validators.required],

    });
  }
}
