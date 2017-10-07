import { Component, OnInit, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { list as countryList } from '../static-data/country';
import { Http } from '@angular/http';
import 'rxjs/operator/every';
import 'rxjs/add/operator/do';
import { RegistrationFormProvider } from '../registration-form.provider';
import { RegistrationProvider } from '../registration.provider';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit, AfterViewChecked {
  public countryList: {name: string, key: string}[];

  constructor(private http: Http,
              private registrationForm: RegistrationFormProvider,
              private registrationProvider: RegistrationProvider) {
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
  }
}
