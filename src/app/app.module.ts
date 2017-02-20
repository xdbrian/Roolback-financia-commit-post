import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppService } from './shared/app.service';
import { AppComponent } from './app.component';
import { OutlayComponent,DialogContent }   from './module/outlay/outlay.component';

//Components


//Modules
import { FecModule } from './module/fec/fec.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    FecModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    OutlayComponent,
    DialogContent
  ],
  providers: [AppService],
  entryComponents: [DialogContent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}