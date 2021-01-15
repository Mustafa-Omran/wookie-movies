import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule, } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, } from '@angular/material/button';

@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  exports: [
    StarRatingComponent
  ]
})
export class StarRatingModule { }
