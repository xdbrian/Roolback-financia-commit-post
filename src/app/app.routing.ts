import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { OutlayComponent } from './modules/register-operation/register-operation.component';
import { ConsultyComponent } from './modules/consulty/consulty.component';
import { ConfirmComponent } from './modules/confirm/confirm.component';
import { FecComponent } from './modules/home/fec/fec.component';
import { ScheludeFecComponent } from './modules/home/fec/views/schelude-fec/schelude.fec.component';

const appRoutes: Routes = [
 { path: 'registrar-operacion', component: OutlayComponent },
 { path: 'consultas', component: ConsultyComponent },
 { path: 'confirmar', component: ConfirmComponent },
 // { path: "fec",
 //    component : FecComponent,
 //    children : [
 //     { path: 'registrar-operacion',  component:  ScheludeFecComponent}
 //    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}