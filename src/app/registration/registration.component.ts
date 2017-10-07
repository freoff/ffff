import { Component, OnInit, AfterViewChecked, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterState } from '@angular/router';
import { RegistrationParams } from './RegistrationParams';
import { RegistrationProvider } from './registration.provider';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationProvider]
})
export class RegistrationComponent implements OnInit, AfterViewChecked, OnChanges {
  editEmail = false;
  params: RegistrationParams = {};

  @ViewChild('emailInput') emailInput: ElementRef;

  constructor(private route: ActivatedRoute, private rProvider: RegistrationProvider) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.params = {...params});
    this.editEmail = !this.params.hasOwnProperty('email');
    // TODO remove it
    this.rProvider.checkDomain('domainToCheck').subscribe(console.log);
  }

  ngAfterViewChecked(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onEditEmailToggle(emailInput) {
    if (this.params.hasOwnProperty('email')) {
      this.editEmail = !this.editEmail;
      this.editEmail && this.emailInput.nativeElement.focus();
    }
  }

  onEnterPress(event, action, ...arg) {
    if (event.key === 'Enter') {
      action ? action(arg) : event.target.blur();
    }
  }
}
