import { Component, OnInit, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operator/every';
import 'rxjs/add/operator/do';
import { RegistrationFormProvider } from '../registration-form.provider';
import { RegistrationProvider } from '../registration.provider';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit, AfterViewChecked {
  public countryList: { name: string, key: string }[];
  public registrationForm: FormGroup;
  public submitedData;
  constructor(private http: Http,
              private formProvider: RegistrationFormProvider,
              private registrationProvider: RegistrationProvider) {
    this.registrationForm = formProvider.registrationForm;
  }

  ngAfterViewChecked() {
  }

  ngOnInit() {
    this.http.get('/assets/kraje.json')
      .map(res => res.json()).subscribe(countries => {
      this.countryList = [...countries];
    });
  }

  submitForm() {

    this.registrationProvider.submit();
    this.submitedData = this.registrationForm.value;
  }
}
