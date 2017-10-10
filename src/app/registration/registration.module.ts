import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { RegistrationProvider } from './registration.provider';
import { RegistrationFormProvider } from './registration-form.provider';
import { Step1Component } from './step1/step1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step2Component } from './step2/step2.component';
import { DisplayValidationDirective } from './directive/display-validation.directive';
import { ErrorDisplayerComponent } from './error-displayer/error-displayer.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'step1'},
      {path: 'step1', component: Step1Component},
      {path: 'step2', component: Step2Component},
      {path: ':email/:resellerId/:country/:lang', component: RegistrationComponent},
      {path: ':email/:resellerId/:country', component: RegistrationComponent},
      {path: ':email/:resellerId', component: RegistrationComponent},
      {path: ':email', component: RegistrationComponent},
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RegistrationComponent,
    Step1Component,
    Step2Component,
    DisplayValidationDirective,
    ErrorDisplayerComponent
  ],
  providers: [RegistrationProvider, RegistrationFormProvider]
})
export class RegistrationModule {
}
