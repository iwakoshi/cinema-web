import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule,
    MatSidenavModule, MatListModule, MatTableModule],
  exports: [MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule,
   MatSidenavModule, MatListModule, MatTableModule]
})
export class MaterialModule { }
