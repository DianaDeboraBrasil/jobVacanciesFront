import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
