import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { RegistrationFormProvider } from '../registration-form.provider';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';



@Directive({
  selector: '[appDisplayValidation]',

})
export class DisplayValidationDirective {

  private registrationForm;
  @Input('appDisplayValidation') private  _myerror: string;
  @HostListener('mouseover') onMouseOver(e){
    console.log(this._myerror);

  }

  set myerror(value: Observable<any>) {
    value.subscribe(console.log);
  }

  constructor(private el: ElementRef,
              private render: Renderer2,
              private formProvider: RegistrationFormProvider) {
    this.registrationForm = formProvider.registrationForm;
    console.log(el);
    console.log(this._myerror);
  }

  // set appDisplayValidatio(errors) {
  //
  //   console.log(errors, this.el);
  // }

}

interface MyValidationError {
  name:   ValidationErrors;

}
