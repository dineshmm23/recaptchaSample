import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {
  RecaptchaModule,
  RecaptchaV3Module,
  RECAPTCHA_V3_SITE_KEY,
} from "ng-recaptcha";
import { PreloadApiDemoComponent } from "./preload-api-demo/preload-api-demo.component";
import { PreloadedRecaptchaAPIService } from "./PreloadedRecaptchaAPI.service";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: '',
    component: PreloadApiDemoComponent,
  },
];
@NgModule({
  declarations: [AppComponent, PreloadApiDemoComponent],
  imports: [RouterModule.forChild(routes),BrowserModule, RecaptchaV3Module, RecaptchaModule],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: "6Ld4nIkaAAAAAKXogOTApGGQcmfTnGuNB57ZPL3m",
    },
    PreloadedRecaptchaAPIService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
