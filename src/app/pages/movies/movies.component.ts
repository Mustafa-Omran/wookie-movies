import { Component, OnInit } from '@angular/core';
import { Movie } from '@wookie/app/models/movie';
import { MoviesService } from '@wookie/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  genres: string[] = [
    'Action',
    'Crime',
    'Drama',
    'Animation',
    'Adventure',
    'Family',
    'Thriller',
    'History',
    'Sci-Fi',
    'Biography',
    'War',
    'Mystery',
  ];

  constructor(private readonly moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.listMovies();

    this.moviesService.currentKeywords.subscribe((keywords: string) => {
      this.listMovies(keywords);
    })
  }

  /**
   * all movies / filer movies
   * 
   * 
   * @param keywords 
   */
  listMovies(keywords?: string) {
    if (keywords != undefined && keywords.length > 0) {
      this.moviesService.search(keywords).subscribe(res => {
        this.movies = res.movies;
      });
    } else {
      this.moviesService.movies.subscribe(res => {
        this.movies = res.movies;
      });
    }
  }

  /**
   * movie details
   * 
   * 
   * @param movie 
   */
  navigateToMovieDetails(movie: Movie) {
    localStorage.setItem('movie', JSON.stringify(movie));
    this.router.navigate(['movies/details', movie.slug]);
  }
}
