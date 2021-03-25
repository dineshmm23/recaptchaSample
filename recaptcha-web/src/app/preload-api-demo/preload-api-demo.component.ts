import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preload-api-demo',
  templateUrl: './preload-api-demo.component.html',
  styleUrls: ['./preload-api-demo.component.css']
})
export class PreloadApiDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
