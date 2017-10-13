import { Component, OnInit } from '@angular/core';
import { RegistrationFormProvider } from '../../registration-form.provider';

@Component({
  selector: 'app-company-name-domain-sync',
  templateUrl: './company-name-domain-sync.component.html',
  styleUrls: ['./company-name-domain-sync.component.css']
})
export class CompanyNameDomainSyncComponent implements OnInit {
  public valueFromCompanyName: string;
  public syncOn = true;
  public domainFromCompanyName = '';
  public filterdValue: string;

  constructor(private formProvider: RegistrationFormProvider) {
  }

  ngOnInit() {
  }

  private syncOff = () => this.syncOn = false;

  onValueChangeCompanyName(value: string) {
    if (!this.syncOn) return; // tslint:disable-line
    this.domainFromCompanyName = this.parseDomain(value);
  }

  private parseDomain(value: string) {
    return value.replace(/\s+/g, '_dash_')
      .replace(/\W/g, '')
      .replace(/_dash_/g, '-');
  }

  onValueChangeDomain(value: string) {
    if (value !== this.domainFromCompanyName) this.syncOff(); // tslint:disable-line
  }

  validateDomain() {
    this.formProvider.registrationForm.get('domain').patchValue(this.domainFromCompanyName, {});
    this.formProvider.registrationForm.get('domain').markAsDirty();
    this.formProvider.registrationForm.get('domain').markAsTouched();
    // this.formProvider.registrationForm.get('domain').updateValueAndValidity({emitEvent: true});
  }
}
