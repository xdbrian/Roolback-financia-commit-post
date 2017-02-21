import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { OutlayComponent } from './module/outlay/outlay.component';
import  { FecComponent } from './module/fec/fec.component';
import {} from './'
const appRoutes: Routes = [
 //{path: 'financiar', component: FecComponent},
 //{ path: '',   redirectTo: '/financiar', pathMatch: 'full' },
 { path: 'desembolso', component:  OutlayComponent},
 { path: 'home', component:  OutlayComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}