import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesService } from './services/services.service';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { CookieService } from 'ngx-cookie-service';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FiltroPipe } from './pipes/filtro.pipe';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    RecaptchaComponent,
    CrearCuentaComponent,
    RegisterComponent,
    RegistroComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
   RecuperarCuentaComponent,
   BusquedaComponent,
   ProductoCardComponent,
   FiltroPipe,
   ProductComponent,
   CartComponent,
   CheckoutComponent,
   ThanksComponent,
   OrdersComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [ServicesService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
