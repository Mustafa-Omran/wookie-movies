import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Movie } from '@wookie/app/models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('movie') !== null) {
      const movie = JSON.parse(localStorage.getItem('movie'));
      this.movie = movie;
    }
  }
}
