import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import isemail from 'isemail';

@Component({
  selector: 'app-entry-point',
  templateUrl: './entry-point.component.html',
  styleUrls: ['./entry-point.component.css']
})
export class EntryPointComponent implements OnInit {
  @ViewChild('menu') collapsedMenu: ElementRef;
  @ViewChild('goToRegisBtn') registerButton: ElementRef;
  emailIsValid: boolean;
  hideErorMag = true;
  buttonDisabled = true;
  toched = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toggleNavbar() {
    this.collapsedMenu.nativeElement.classList.toggle('show');
  }

  registerWithEmail(email) {
    this.router.navigate(['/registration', email]);
  }

  validateEmail/*onKeypress*/(ev) {
    this.emailIsValid = isemail.validate(ev.target.value);
    if (this.toched) {
      this.hideErorMag = this.emailIsValid;
    }
    this.buttonDisabled = !this.emailIsValid;
    if (ev.code === 'Enter') {
      this.registerButton.nativeElement.click();
    }
  }

  exitFromInput(ev: KeyboardEvent) {
    this.toched = true;
    this.hideErorMag = this.emailIsValid;

  }
}
