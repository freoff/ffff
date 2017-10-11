import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegistrationFormProvider } from '../../registration-form.provider';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AbstractControlStatus } from '@angular/forms/src/directives/ng_control_status';

@Component({
  selector: 'app-vcinput',
  templateUrl: './vcinput.component.html',
  styleUrls: ['./vcinput.component.css']
})
export class VcinputComponent implements OnInit {
  public controlObject: AbstractControl;
  public registrationForm: FormGroup;

  @Input() myControlName: string;
  @Input() inputType: string;
  @Input() placeholder: string;
  @Input() require: boolean;
  @Input() defaultValue: string | null;
  @Input() order: number;
  @Input() customText: string;

  @Output() valueChange = new EventEmitter<string>();

  constructor(private registrationFormProvider: RegistrationFormProvider) {
    this.registrationForm = registrationFormProvider.registrationForm;

  }

  onChange(event: Event) {
    this.valueChange.emit((<HTMLInputElement>event.target).value);

  }

  ngOnInit() {
    this.controlObject = this.registrationForm.get(this.myControlName);
  }

  onBlur(event: Event) {
    // fire changeEvent on formgroup when enter and leave fild by tab
    if ((<HTMLInputElement>event.target).value === '') this.clearField(); // tslint:disable-line
  }

  private clearField() {
    this.controlObject.setValue('');
  }


}
