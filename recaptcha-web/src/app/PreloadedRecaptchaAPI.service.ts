import { Inject, Injectable, Optional } from "@angular/core";
import { RECAPTCHA_V3_SITE_KEY } from "ng-recaptcha";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PreloadedRecaptchaAPIService {
  public ready: Observable<ReCaptchaV2.ReCaptcha>;

  constructor(@Optional() @Inject(RECAPTCHA_V3_SITE_KEY) v3SiteKey?: string) {
    const readySubject = new BehaviorSubject<ReCaptchaV2.ReCaptcha>(null);
    this.ready = readySubject.asObservable();

    if (typeof grecaptcha === "undefined") {
      const recaptchaScript = document.createElement("script");
      const renderMode = v3SiteKey || "explicit";
      recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=${v3SiteKey}`;
      document.head.appendChild(recaptchaScript);
    }

    const interval = setInterval(() => {
      if (
        typeof grecaptcha === "undefined" ||
        !(grecaptcha.render instanceof Function)
      ) {
        return;
      }

      clearInterval(interval);
      readySubject.next(grecaptcha);
    }, 50);
  }
}
