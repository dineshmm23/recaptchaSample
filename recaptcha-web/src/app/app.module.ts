import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaV3Module
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Ld4nIkaAAAAAKXogOTApGGQcmfTnGuNB57ZPL3m' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
