import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { RegistrationParams } from './RegistrationParams';
import { RegistrationFormProvider } from './registration-form.provider';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class RegistrationProvider {
  private _DOMAIN_CHECK_URL = 'http://httpbin.org/get';
  public params: RegistrationParams;
  private form: FormGroup;

  constructor(private http: Http,
              registrationForm: RegistrationFormProvider) {
    this.form = registrationForm.registrationForm;
  }

  checkDomain(domain: string) {

    return this.http.get(this._DOMAIN_CHECK_URL, {params: {domain}});

  }

  submit() {
    if (this.params.hasOwnProperty('resellerId')) {
      this.form.patchValue({'resellerId': this.params.resellerID});
    }
    if (this.params.hasOwnProperty('kraj')) {
      this.form.patchValue({'kraj': this.params.kraj});
    }
    // TODO getRegistration url, and server response blueprint ;)
    console.log(this.form.value);
    //window.localStorage.setItem(Date.now(), this.form.value);
  }
}
