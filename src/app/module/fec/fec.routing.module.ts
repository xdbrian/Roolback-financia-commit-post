import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent }    from './views/register-provider/register.component';
import { ScheludeFecComponent } from './views/schelude-fec/schelude.fec.component';
import { FecComponent } from './fec.component';
const fecRoutes: Routes = [
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
    RouterModule.forChild(fecRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FecRoutingModule { }