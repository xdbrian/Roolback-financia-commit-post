
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MdInputModule } from '@angular/material/';
import { AppService } from '../../shared/app.service';
import { HomeComponent } from './views/home/home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MaterialModule.forRoot(),
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [ AppService ],
  bootstrap: [ HomeComponent ]
})
export class HomeModule {

}