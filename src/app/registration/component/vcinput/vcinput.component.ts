import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { RegistrationFormProvider } from '../../registration-form.provider';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AbstractControlStatus } from '@angular/forms/src/directives/ng_control_status';

@Component({
  selector: 'app-vcinput',
  templateUrl: './vcinput.component.html',
  styleUrls: ['./vcinput.component.css']
})
export class VcinputComponent implements OnInit {
  public hideExtraText = false;
  public controlObject: AbstractControl;
  public registrationForm: FormGroup;

  @ViewChild('') estraTekst: ElementRef;
  @Input() myControlName: string;
  @Input() inputType = 'text';
  @Input() placeholder: string;
  @Input() fieldRequire: boolean;
  @Input() defaultValue: string | null;
  @Input() order: number;
  @Input() customText: string;
  @Input() label: string;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output('onBlur') blurEE = new EventEmitter<void>();
  public showCustomText = true;

  constructor(private registrationFormProvider: RegistrationFormProvider) {
    this.registrationForm = registrationFormProvider.registrationForm;
  }

  ngOnInit() {
    this.controlObject = this.registrationForm.get(this.myControlName);

  }

  onBlur(event: Event) {
    if ((<HTMLInputElement>event.target).value === '') this.clearField(); // tslint:disable-line
    this.blurEE.emit();
  }

  private clearField() {
    this.controlObject.setValue('');
  }

  onKeyPress(event: Event) {
    const target = (<HTMLInputElement>event.target);
    this.valueChange.emit(target.value);
  }
}
