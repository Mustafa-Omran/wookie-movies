import { Injectable } from '@angular/core';
import { HttpClientService } from '@wookie/app/core/http-client/http-client.service';
import { Movie } from '@wookie/models/movie';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

interface Response {
  movies: Movie[],
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private onType: Subject<string> = new Subject<string>();
  public currentKeywords = this.onType.asObservable();

  private onMovie: Subject<Movie> = new Subject<Movie>();
  public currentMovie = this.onMovie.asObservable();

  constructor(private http: HttpClientService) { }

  /**
   * list all movies
   * 
   * @returns {Observable<Movie[]>}
   */
  get movies(): Observable<Response> {
    return this.http.get('movies');
  }

  /**
   * search in movies
   * 
   * 
   * @param keywords 
   * @returns {Observable<Movie[]>}
   */
  search(keywords: string): Observable<Response> {
    return this.http.get(`movies?q=${keywords}`);
  }

  /**
   * on typing change text
   * 
   * 
   * @param value 
   */
  changeKeywords(value: string) {
    this.onType.next(value);
  }

  /**
 * on typing change text
 * 
 * 
 * @param value 
 */
  changeMovie(movie: Movie) {
    this.onMovie.next(movie);
  }
}
