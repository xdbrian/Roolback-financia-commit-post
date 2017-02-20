
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MdInputModule } from '@angular/material/';
import { AppService } from '../../shared/app.service';
import { RegisterComponent,DialogContent } from './views/register-provider/register.component';
import { FecComponent } from './fec.component';
import { SimpleTable } from '../../components/simple-table/simpleTable.component';
import { ScheludeFecComponent} from './views/schelude-fec/schelude.fec.component';

import { FecRoutingModule } from './fec.routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MaterialModule.forRoot(),
    FecRoutingModule
  ],
  declarations: [
    RegisterComponent,
    DialogContent,
    FecComponent,
    SimpleTable,
    ScheludeFecComponent
  ],
  providers: [ AppService ],
  entryComponents: [DialogContent],
  bootstrap: [ FecComponent ]
})
export class FecModule {}