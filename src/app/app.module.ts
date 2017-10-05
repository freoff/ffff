import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {EntryPointComponent} from './entry-point/entry-point.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
  {
    path: '',
    component: EntryPointComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'registration/:email',
    component: RegistrationComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EntryPointComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
