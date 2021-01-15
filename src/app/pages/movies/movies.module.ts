import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FilterModule } from '@wookie/app/pipes/filter/filter.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StarRatingModule } from '@wookie/app/shared/star-rating/star-rating.module';

@NgModule({
  declarations: [MoviesComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FilterModule,
    MatTooltipModule,
    StarRatingModule
  ]
})
export class MoviesModule { }
