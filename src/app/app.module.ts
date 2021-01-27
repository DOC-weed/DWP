import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RecaptchaComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
