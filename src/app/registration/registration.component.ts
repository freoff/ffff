import {
  Component, OnInit, AfterViewChecked, OnChanges, SimpleChanges, ViewChild, ElementRef,
  ViewChildren
} from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { RegistrationParams } from './RegistrationParams';
import { RegistrationProvider } from './registration.provider';
import { RegistrationFormProvider } from './registration-form.provider';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})
export class RegistrationComponent implements OnInit, AfterViewChecked, OnChanges {
  editEmail = false;
  params: RegistrationParams = {};

  @ViewChild('emailInput') emailInput: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private registrationProvider: RegistrationProvider) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.registrationProvider.params = this.params = {...params});
    if (Object.keys(this.params).length > 0) {
      this.router.navigate(['step1'],
        {
          relativeTo: this.activatedRoute.parent,
          skipLocationChange: true,

        });
    }
  }

  ngAfterViewChecked(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
