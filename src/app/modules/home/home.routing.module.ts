import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home.component';
import { ScheludeFecComponent } from './fec/views/schelude-fec/schelude.fec.component';
import { FecComponent } from './fec/fec.component';
import { RegisterComponent }    from './fec/views/register-provider/register.component';
const homeRoutes: Routes = [
  {    
    path: "home",
    component : HomeComponent,
  },
  { path: 'home/fec',redirectTo: '/fec',pathMatch: 'full'},
  {
    path: "fec",
    component : FecComponent,
    children : [
      { path: 'registrar',  component:  RegisterComponent},
        { path: 'cronograma',  component:  ScheludeFecComponent}
    ]
    }
  ];
@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }