
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MdInputModule } from '@angular/material/';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent} from './home.component';

import { FecComponent } from './fec/fec.component';
//Modules
import { FecModule } from './fec/fec.module';
import { RegisterComponent }    from './fec/views/register-provider/register.component';
import { ScheludeFecComponent } from './fec/views/schelude-fec/schelude.fec.component';
import { SimpleTable } from '../../components/simple-table/simpleTable.component';
import { StepProgress } from '../../components/step-progress/step-progress.component';
import { HeaderStatusComponent } from '../../components/header-status/header-status.component';
@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MaterialModule.forRoot(),
    HomeRoutingModule,
    //DialogContent
  ],
  declarations: [
    HomeComponent,
    FecComponent,
    RegisterComponent,
    ScheludeFecComponent,
    SimpleTable,
    StepProgress,
    HeaderStatusComponent,

  ],
  bootstrap: [ HomeComponent,FecComponent ]
})
export class HomeModule {

}