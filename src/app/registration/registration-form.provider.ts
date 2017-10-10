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

  constructor(private fb: FormBuilder, private http: Http) {
    this.buildForm();
  }

  get registrationForm(): FormGroup {
    return this._registrationForm;
  }

  public domainValidator(control: AbstractControl) {
    // TODO remove thid mock
    return new Promise((res, rej) => {
      console.log(`start mock fetchin data for domain ${control.value}`);
      setTimeout(() => {
        console.log(`mock fetching complete for ${control.value}`);
        if (/^[a-dA-D]/.test(control.value)) {
          res(true);
        }
        else res({domain: true}); // tslint:disable-line
      }, 2000);
    });
  }

// TODO add validator to companyName (checkdomain in registrationProvider)
  private buildForm() {
    this._registrationForm = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(8)]],
      'email': ['', Validators.email],
      'password': ['', [Validators.required, Validators.minLength(8)]],
      'companyName': ['', Validators.required],
      'domain': ['', Validators.required, this.domainValidator],
      'country': ['', Validators.required],
      'timeZone': ['', Validators.required],
      'businessSector': ['', Validators.required],
      'website': ['', Validators.required],
    });
  }
}
