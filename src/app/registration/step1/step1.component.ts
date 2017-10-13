import {
  AfterViewChecked, Component, ElementRef, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild,
  ViewChildren
} from '@angular/core';
import { RegistrationParams } from '../RegistrationParams';
import { ActivatedRoute } from '@angular/router';
import { RegistrationProvider } from '../registration.provider';
import { RegistrationFormProvider } from '../registration-form.provider';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit, AfterViewChecked, OnChanges {
  editEmailVisable = false;

  params: RegistrationParams = {};
  registrationForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef;

  constructor(private route: ActivatedRoute,
              private registrationProvider: RegistrationProvider,
              private registrationFormProvider: RegistrationFormProvider) {
    this.registrationForm = registrationFormProvider.registrationForm;
  }

  ngOnInit() {
    this.params = this.registrationProvider.params;
    this.editEmailVisable = this.registrationForm.get('email').value.length > 3;
  }

  ngAfterViewChecked(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onEditEmailToggle(emailInput) {
    if (this.params.hasOwnProperty('email')) {
      this.editEmailVisable = !this.editEmailVisable;
    }
  }

  onEnterPress(event, action, ...arg) {
    if (event.key === 'Enter') {
      action ? action(arg) : event.target.blur();
    }
  }


}
