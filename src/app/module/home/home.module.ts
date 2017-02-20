
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MdInputModule } from '@angular/material/';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    HomeComponent,
  ],
  bootstrap: [ HomeComponent ]
})
export class HomeModule {

}