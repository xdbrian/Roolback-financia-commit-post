import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { OutlayComponent } from './modules/outlay/outlay.component';

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
    OutlayComponent
    //DialogContent
  ],
  //entryComponents: [DialogContent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}