import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent,
  ]
})
export class HeaderModule { }
