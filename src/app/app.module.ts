import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EntryPointComponent } from './entry-point/entry-point.component';
import { HttpModule } from '@angular/http';
import { RegistrationModule } from './registration/registration.module';

const routes: Routes = [
  {
    path: '',
    component: EntryPointComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    EntryPointComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RegistrationModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
