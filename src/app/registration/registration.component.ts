import {
  Component, OnInit, AfterViewChecked, OnChanges, SimpleChanges, ViewChild, ElementRef,
  ViewChildren
} from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { RegistrationParams } from './RegistrationParams';
import { RegistrationProvider } from './registration.provider';
import { RegistrationFormProvider } from './registration-form.provider';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})
export class RegistrationComponent implements OnInit {
  params: RegistrationParams = {};

  @ViewChild('emailInput') emailInput: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private registrationFormProvider: RegistrationFormProvider,
              private registrationProvider: RegistrationProvider) {
    this.registrationProvider.params = this.params;
  }

  ngOnInit() {
    console.log('enter init');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      const fg = this.registrationFormProvider.registrationForm;
      paramMap.keys.forEach(key => {
        this.params[key] = paramMap.get(key);
        if (key === 'email') fg.patchValue({email: paramMap.get(key)}); // tslint:disable-line
        else if (key === 'country') fg.patchValue({country: paramMap.get(key).toUpperCase()}); // tslint:disable-line
        else fg.addControl(key, new FormControl(paramMap.get(key))); // tslint:disable-line
      });
    });
    if (Object.keys(this.params).length > 0) {
      this.router.navigate(['step1'],
        {
          relativeTo: this.activatedRoute.parent,
          skipLocationChange: true,
        });
    }
  }

}
