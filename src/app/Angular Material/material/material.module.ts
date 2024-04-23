import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule, MatFormFieldModule, MatCheckboxModule, MatToolbarModule, MatInputModule
  ], exports: [
    MatButtonModule,
    MatSidenavModule,
    MatSidenav,
     MatFormFieldModule, MatCheckboxModule, MatToolbarModule, MatInputModule
  ]
})
export class MaterialModule { }
