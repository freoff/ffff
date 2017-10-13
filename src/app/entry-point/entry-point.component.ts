import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


const isemail = {
  validate: (value: string) => {
    const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/; // tslint:disable-line
    return EMAIL_REGEXP.test(value);
  }
};

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
    console.log(ev.target.value);
    this.emailIsValid = isemail.validate(ev.target.value);
    if (this.toched) {
      this.hideErorMag = this.emailIsValid;
    }
    this.buttonDisabled = !this.emailIsValid;
    if (ev.code === 'Enter') {
      this.registerButton.nativeElement.click();
    }
  }

  exitFromInput() {
    this.toched = true;
    this.hideErorMag = this.emailIsValid;

  }
}
