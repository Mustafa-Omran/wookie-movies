import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '@wookie/app/services/movies.service';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  keywords: string;

  constructor(private readonly moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(filter(Boolean), debounceTime(500), distinctUntilChanged(),
      tap(event => {
        this.moviesService.changeKeywords(this.keywords);
        this.router.navigate(['movies']);
      })).subscribe();
  }
}
