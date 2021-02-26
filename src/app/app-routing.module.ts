import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'registro'},
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path:'registro',component:RegistroComponent},
  {path:'login', component:LoginComponent},
  {path: 'recuperar', component:RecuperarCuentaComponent},
  {path:'busqueda', component:BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
