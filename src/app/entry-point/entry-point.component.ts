import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import isemail from 'isemail';

@Component({
  selector: 'app-entry-point',
  templateUrl: './entry-point.component.html',
  styleUrls: ['./entry-point.component.css']
})
export class EntryPointComponent implements OnInit {
  @ViewChild('menu') collapsedMenu: ElementRef;
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
    console.log();
    this.router.navigate(['/registration', email]);
  }

  validateEmail/*onKeypress*/(email: string) {

    this.emailIsValid = isemail.validate(email);
    if(this.toched) this.hideErorMag = this.emailIsValid;
    this.buttonDisabled = !this.emailIsValid;
    console.log(`Validate ${email} validEmail is ${this.emailIsValid}`);
  }

  exitFromInput() {
    this.toched = true;
    this.hideErorMag = this.emailIsValid;
  }
}
