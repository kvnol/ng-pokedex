import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/signed/search/search.component';
import { SingleComponent } from './pages/signed/single/single.component';
import { SigninComponent } from './components/forms/signin/signin.component';
import { SignupComponent } from './components/forms/signup/signup.component';
import { ModalSignModule } from './components/modals/modal-sign/modal-sign.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SingleComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, ModalSignModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
