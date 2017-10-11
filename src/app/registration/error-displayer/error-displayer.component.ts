import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RegistrationFormProvider } from '../registration-form.provider';
import { Subscription } from 'rxjs/Subscription';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-displayer',
  templateUrl: './error-displayer.component.html',
  styleUrls: ['./error-displayer.component.css']
})
export class ErrorDisplayerComponent implements OnInit, OnDestroy {

  @Input() appFieldName: string;
  @Input() appMinLength: number;
  private subscription: Subscription;
  private form: FormGroup;
  private field: AbstractControl;
  public errors: string[];

  constructor(private formProvider: RegistrationFormProvider) {
    this.form = formProvider.registrationForm;

  }


  ngOnInit() {
    this.field = this.form.get(this.appFieldName);
    this.subscription = this.form.statusChanges
      .subscribe((sch) => {
        console.log('status change', sch);

        const validationErrors = this.field.errors;
        if (this.isEmptyObject(validationErrors) ||
          this.field.pristine
        ) {
          if (this.field.untouched || this.isEmptyObject(validationErrors )) {
            this.errors = [];
            return;
          }
        }

        const result = Object.entries(this.field.errors)
          .map(([errorCode, errorObject]) => {
            if (errorCode === null) {
              return null;
            }
            console.log(`get error code ${errorCode} value is ${errorObject}`);

            switch (errorCode) {
              case('required'): /* require */
                return 'Field is required';
              case('minlength'): /*{'minlength': {'requiredLength': minLength, 'actualLength': length}} :*/
                return `Warnig minimal length is ${errorObject.requiredLength} now is ${errorObject.actualLength}`;
              case('email'): /* email:true */
                return 'Email is not valid';
              case('max'): /* {'max': {'max': max, 'actual': control.value}} */
                return `This is to long, max length is ${errorObject.max}`;
              case('domain'):
                return `Domain must start with [a-dA-D]`;
              default:
                return 'Field Error';
            }
          });
        this.errors = result;
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

