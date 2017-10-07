import { AfterViewChecked, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RegistrationParams } from '../RegistrationParams';
import { ActivatedRoute } from '@angular/router';
import { RegistrationProvider } from '../registration.provider';
import { RegistrationFormProvider } from '../registration-form.provider';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit, AfterViewChecked, OnChanges {
  private registra
  editEmail = false;
  params: RegistrationParams = {};

  @ViewChild('emailInput') emailInput: ElementRef;

  constructor(private route: ActivatedRoute,
              private registrationProvider: RegistrationProvider,
              private formProvider: RegistrationFormProvider) {
  }

  ngOnInit() {
    this.params = this.registrationProvider.params;
    this.editEmail = !this.params.hasOwnProperty('email');
    this.formProvider.registrationForm.patchValue({'email': this.params.email});
  }

  ngAfterViewChecked(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  onEditEmailToggle(emailInput) {
    if (this.params.hasOwnProperty('email')) {
      this.editEmail = !this.editEmail;
      !this.editEmail && setTimeout(() => this.emailInput.nativeElement.focus(), 100);
    }
  }
  onEnterPress(event, action, ...arg) {
    if (event.key === 'Enter') {
      action ? action(arg) : event.target.blur();
    }
  }

}