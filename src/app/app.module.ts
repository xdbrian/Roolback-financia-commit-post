import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { OutlayComponent } from './modules/register-operation/register-operation.component';
import { ConsultyComponent } from './modules/consulty/consulty.component';
import { ConfirmComponent } from './modules/confirm/confirm.component';
// import { ScheludeFecComponent } from './modules/home/fec/views/schelude-fec/schelude.fec.component';
// import { FecComponent } from './modules/home/fec/fec.component';

 // import { HeaderStatusComponent } from './components/header-status/header-status.component';

//Components

//Modules
import { FecModule } from './modules/home/fec/fec.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    HomeModule,
    AppRoutingModule
  ],
  declarations: [

    AppComponent,
    ConsultyComponent,
    ConfirmComponent,
    OutlayComponent,
    // HeaderStatusComponent,
    // ScheludeFecComponent,
    // FecComponent,
    //DialogContent
  ],
  //entryComponents: [DialogContent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}