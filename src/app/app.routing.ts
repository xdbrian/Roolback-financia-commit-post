import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { OutlayComponent } from './modules/outlay/outlay.component';
const appRoutes: Routes = [
 { path: 'registrar-operacion', component: OutlayComponent },
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