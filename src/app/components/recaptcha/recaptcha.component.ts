import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  siteKey: string;

  constructor() { 
    this.siteKey = '6LffdDwaAAAAABy1pbhQflEpSfymvai4qxEZREM8'
  }
  ngOnInit(): void {
  }

}
