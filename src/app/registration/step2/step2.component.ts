import {
  Component,
  OnInit,
  AfterViewChecked,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operator/every';
import 'rxjs/add/operator/do';
import { RegistrationFormProvider } from '../registration-form.provider';
import { RegistrationProvider } from '../registration.provider';
import { FormGroup } from '@angular/forms';
import 'rxjs/operator/throttle';
import * as jstz from 'jstz';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  private timeZones: { [prop: string]: { key: string, value: string }[] };
  private _allZone: { key: string, value: string }[];
  public countryList: { code: string, name: string }[];
  public registrationForm: FormGroup;
  public submitedData;
  formStillHaveErrors = false;


  get allZone(): { key: string, value: string }[] {
    if (this._allZone) return this._allZone; // tslint:disable-line
    let result = [];
    if (this.timeZones) {
      Object.entries(this.timeZones).map(([okey, ovalue]) => result = [...result, ...ovalue]);
    }
    result.sort((a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0);
    result.length > 0 ? this._allZone = result : null; // tslint:disable-line

    return this._allZone;
  }

  constructor(private http: Http,
              private formProvider: RegistrationFormProvider,
              private registrationProvider: RegistrationProvider) {
    this.registrationForm = formProvider.registrationForm;

  }

  ngOnInit() {
    this.http.get('/assets/kraje.json')
      .map(res => res.json())
      .subscribe(countries => {
        this.countryList = countries;
        this.preselectCountry();
      });
    this.http.get('/assets/country2timezone.json')
      .map(res => res.json())
      .subscribe(c2t => {
        this.timeZones = c2t;
        this.preselectTimeZone();
      });
  }

  submitForm() {

    if (this.registrationForm.invalid) {
      this.formStillHaveErrors = true;
      for (const fc in this.registrationForm.controls) {
        if (this.registrationForm.controls.hasOwnProperty(fc)) {
          this.registrationForm.controls[fc].markAsTouched();
          this.registrationForm.controls[fc].markAsDirty();
        }
      }

    } else {
      this.registrationProvider.submit();
      this.submitedData = this.registrationForm.value;
    }
  }

  private preselectTimeZone() {
    console.dir(Intl.DateTimeFormat().resolvedOptions());
    const timeZone = jstz.determine().name();
    const indexInJson = Array.prototype.findIndex.call(this.allZone, it => it.key === timeZone);
    if (indexInJson > -1) {
      this.registrationForm.patchValue({'timeZone': timeZone});
      this.registrationForm.get('timeZone').markAsTouched();
      this.registrationForm.get('timeZone').markAsDirty();
    } // tslint:disable-line
  }

  private preselectCountry() {
    let countryCode: string;
    if (this.registrationForm.get('country').value) {
      countryCode = this.registrationForm.get('country').value;
    } else if (window.navigator.language.slice(3).length === 2) {
      countryCode = window.navigator.language.slice(3);
    }
    countryCode && this.formProvider.registrationForm.patchValue({country: countryCode}); // tslint:disable-line
    this.registrationForm.get('country').markAsDirty();
    this.registrationForm.get('country').markAsTouched();
  }
}
