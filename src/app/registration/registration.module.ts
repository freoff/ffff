import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { RegistrationProvider } from './registration.provider';
import { RegistrationFormProvider } from './registration-form.provider';
import { Step1Component } from './step1/step1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step2Component } from './step2/step2.component';
import { ErrorDisplayerComponent } from './component/error-displayer/error-displayer.component';
import { VcinputComponent } from './component/vcinput/vcinput.component';
import { CompanyNameDomainSyncComponent } from './component/company-name-domain-sync/company-name-domain-sync.component';
import { SocialGoogleBtnComponent } from './component/social-google-btn/social-google-btn.component';
import { SocialFacebookBtnComponent } from './component/social-facebook-btn/social-facebook-btn.component';
import { VcselectComponent } from './component/vcselect/vcselect.component';

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
    ErrorDisplayerComponent,
    VcinputComponent,
    CompanyNameDomainSyncComponent,
    SocialGoogleBtnComponent,
    SocialFacebookBtnComponent,
    VcselectComponent
  ],
  providers: [RegistrationProvider, RegistrationFormProvider]
})
export class RegistrationModule {
}
