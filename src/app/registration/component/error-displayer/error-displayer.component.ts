import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RegistrationFormProvider } from '../../registration-form.provider';
import { Subscription } from 'rxjs/Subscription';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-displayer',
  templateUrl: './error-displayer.component.html',
  styleUrls: ['./error-displayer.component.css']
})
export class ErrorDisplayerComponent implements OnInit, OnDestroy {

  @Input() emRequired = 'Field is required';
  @Input() emMinLength = 'Minimal length is';
  @Input() emEmail = 'Email is not valid';
  @Input() emMax = 'This is to long, max length is';
  @Input() emMin: string;
  @Input() emDomainNotAviable: 'This url  is not aviable';
  @Input() emDomainIncorrect: 'This url is no correct';
  @Input() emDefault: 'Field has error';
  @Input() appFieldName: string;
  private subscription: Subscription;
  private form: FormGroup;
  private field: AbstractControl;
  public errors: string[];

  constructor(private formProvider: RegistrationFormProvider) {
    this.form = formProvider.registrationForm;

  }
  ngOnInit() {
    this.field = this.form.get(this.appFieldName);
    this.subscription = this.field.statusChanges
      .subscribe(() => {
        if (this.isEmptyObject(this.field.errors)) {
          this.errors = [];
          return;
        } // tslint:disable-line
        this.errors = Object.entries(this.field.errors)
          .map(([errorCode, errorObject]) => {
            if (errorCode === null) {
              return null;
            }
            switch (errorCode) {
              case('required'): /* require */
                return this.emRequired;
              case('minlength'): /*{'minlength': {'requiredLength': minLength, 'actualLength': length}} :*/
                return `${this.emMin}${errorObject.requiredLength} now is ${errorObject.actualLength}`;
              case('email'):
                return this.emEmail; /* email:true */
              case('max'):
                return `${this.emMax} ${errorObject.max}`; /* {'max': {'max': max, 'actual': control.value}} */
              case('domainNotAviable'):
                return this.emDomainNotAviable;
              case('domainIncorrect'):
                return this.emDomainIncorrect;
              default:
                return 'Field Error';
            }
          });
      });
  }

  private isEmptyObject(obj: any) {
    for (const k in obj) {
      if (obj.hasOwnProperty(k)) {
        return false;
      }
    }
    return true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

