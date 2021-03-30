import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { AccessgruardGuard } from './guard/accessgruard.guard';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'busqueda'},
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path:'registro',component:RegistroComponent},
  {path:'login', component:LoginComponent},
  {path: 'recuperar', component:RecuperarCuentaComponent},
  {path:'busqueda', component:BusquedaComponent},
  {path: 'producto/:id', component:ProductComponent},
  {path: 'cart', component:CartComponent, canActivate:[AccessgruardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
