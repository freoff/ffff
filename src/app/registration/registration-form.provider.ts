import { Injectable, Provider } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { RegistrationProvider } from './registration.provider';
import { Http } from '@angular/http';


@Injectable()
export class RegistrationFormProvider {
  private _email = '';
  private _registrationForm: FormGroup;
  private DOMAIN_REGEX = /^([a-zA-Z0-9\-_]\.[a-zA-Z0-9\-_])+/
  constructor(private fb: FormBuilder, private http: Http) {
    this.buildForm();
  }

  get registrationForm(): FormGroup {
    return this._registrationForm;
  }

  public isDomainIsAviable(control: AbstractControl) {
    // TODO async domain check
  }


  private buildForm() {
    this._registrationForm = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(8)]],
      'email': ['', Validators.email],
      'password': ['', [Validators.required, Validators.minLength(8)]],
      'companyName': ['', Validators.required],
      'domain': ['', [Validators.required, /*Validators.pattern(this.DOMAIN_REGEX)*/],],
      'country': ['', Validators.required],
      'timeZone': ['', Validators.required],
      'businessSector': [''],
      'website': [''],
    });
  }
}
