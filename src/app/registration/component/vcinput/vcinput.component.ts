import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegistrationFormProvider } from '../../registration-form.provider';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vcinput',
  templateUrl: './vcinput.component.html',
  styleUrls: ['./vcinput.component.css']
})
export class VcinputComponent implements OnInit {
  @Input() myControlName: string;
  @Input() inputType: string;
  @Input() placeholder: string;
  @Input() require: boolean;
  @Input() defaultValue: string | null;
  @Input() order: number;
  @Output() valueChange = new EventEmitter<string>();

  registrationForm: FormGroup;

  constructor(private registrationFormProvider: RegistrationFormProvider) {
    this.registrationForm = registrationFormProvider.registrationForm;
  }

  onChange(event: Event) {
    this.valueChange.emit((<HTMLInputElement>event.target).value);
  }

  ngOnInit() {

  }

  onBlur(event: Event) {
    // fire changeEvent on formgroup when enter and leave fild by tab
    if ((<HTMLInputElement>event.target).value === '') this.clearField(); // tslint:disable-line
  }

  private clearField() {
    this.registrationForm.controls[this.myControlName].setValue('');
  }
}
